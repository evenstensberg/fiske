(function () {
  "use strict";

  var areas = window.FISKEOMRADER || [];
  var state = { municipality: "all", type: "all", search: "", activeId: null };
  var markers = {};

  // ---------------- Map setup ----------------
  var map = L.map("map", { zoomControl: true }).setView([60.62, 12.1], 9);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-bidragsytere',
  }).addTo(map);

  function markerColor(type) {
    return type === "elv" ? "#2dd4bf" : "#38bdf8";
  }

  function makeIcon(type) {
    var color = markerColor(type);
    return L.divIcon({
      className: "fish-marker",
      html:
        '<span style="display:block;width:18px;height:18px;border-radius:50%;' +
        "background:" +
        color +
        ";border:2px solid #0f172a;box-shadow:0 0 0 2px " +
        color +
        '66;"></span>',
      iconSize: [18, 18],
      iconAnchor: [9, 9],
      popupAnchor: [0, -10],
    });
  }

  function popupHtml(area) {
    var species = area.species
      .map(function (s) {
        return '<span class="species-tag">' + s + "</span>";
      })
      .join("");
    return (
      '<div class="popup-title">' +
      area.name +
      "</div>" +
      '<div class="popup-sub">' +
      area.municipality +
      " · " +
      (area.type === "elv" ? "Elv" : "Innsjø") +
      "</div>" +
      '<div class="popup-desc">' +
      area.description +
      "</div>" +
      '<div class="popup-species">' +
      species +
      "</div>" +
      '<div class="popup-licence">🎫 ' +
      area.licence +
      "</div>"
    );
  }

  areas.forEach(function (area) {
    var marker = L.marker([area.lat, area.lng], { icon: makeIcon(area.type) })
      .addTo(map)
      .bindPopup(popupHtml(area));
    marker.on("click", function () {
      setActive(area.id, false);
    });
    markers[area.id] = marker;
  });

  // ---------------- Filtering ----------------
  function matches(area) {
    if (state.municipality !== "all" && area.municipality !== state.municipality)
      return false;
    if (state.type !== "all" && area.type !== state.type) return false;
    if (state.search) {
      var q = state.search.toLowerCase();
      var hay = (area.name + " " + area.species.join(" ")).toLowerCase();
      if (hay.indexOf(q) === -1) return false;
    }
    return true;
  }

  function render() {
    var list = document.getElementById("area-list");
    list.innerHTML = "";
    var visible = areas.filter(matches);

    document.getElementById("result-count").textContent =
      visible.length + " av " + areas.length + " områder";

    visible.forEach(function (area) {
      markers[area.id].getElement().style.display = "";

      var li = document.createElement("li");
      li.className = "area-item" + (area.id === state.activeId ? " is-active" : "");
      li.dataset.id = area.id;

      var species = area.species
        .slice(0, 4)
        .map(function (s) {
          return '<span class="species-tag">' + s + "</span>";
        })
        .join("");

      li.innerHTML =
        '<div class="area-item-top">' +
        '<span class="area-name">' +
        area.name +
        "</span>" +
        '<span class="type-badge ' +
        area.type +
        '">' +
        (area.type === "elv" ? "Elv" : "Innsjø") +
        "</span>" +
        "</div>" +
        '<div class="area-meta">' +
        area.municipality +
        "</div>" +
        '<div class="area-species">' +
        species +
        "</div>";

      li.addEventListener("click", function () {
        setActive(area.id, true);
      });
      list.appendChild(li);
    });

    // Hide markers filtered out
    areas.forEach(function (area) {
      var el = markers[area.id].getElement();
      if (!el) return;
      el.style.display = matches(area) ? "" : "none";
    });
  }

  function setActive(id, pan) {
    state.activeId = id;
    var area = areas.find(function (a) {
      return a.id === id;
    });
    if (!area) return;
    if (pan) map.setView([area.lat, area.lng], Math.max(map.getZoom(), 11), {
      animate: true,
    });
    markers[id].openPopup();
    render();
    var el = document.querySelector('.area-item[data-id="' + id + '"]');
    if (el) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  // ---------------- Controls ----------------
  document.getElementById("search").addEventListener("input", function (e) {
    state.search = e.target.value.trim();
    render();
  });

  document
    .getElementById("municipality-filters")
    .addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      state.municipality = btn.dataset.municipality;
      setActiveChip("municipality-filters", btn);
      render();
    });

  document.getElementById("type-filters").addEventListener("click", function (e) {
    var btn = e.target.closest(".chip");
    if (!btn) return;
    state.type = btn.dataset.type;
    setActiveChip("type-filters", btn);
    render();
  });

  function setActiveChip(groupId, btn) {
    var group = document.getElementById(groupId);
    group.querySelectorAll(".chip").forEach(function (c) {
      c.classList.remove("is-active");
    });
    btn.classList.add("is-active");
  }

  render();
})();
