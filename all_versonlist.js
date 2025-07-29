 const versions = [
      {
        version: "v4.3.1",
        date: "2025-07-27",
        type: "Stable",
        size: "12.4 MB",
        notes: "Major UI update, Download Manager added, bug fixes.",
        download: "#",
        changelog: "#"
      },
      {
        version: "v4.2.5-beta",
        date: "2025-07-10",
        type: "Beta",
        size: "11.9 MB",
        notes: "Testing new fullscreen tab mode with VTS enabled.",
        download: "#",
        changelog: "#"
      },
      {
        version: "v4.0",
        date: "2025-06-20",
        type: "Stable",
        size: "10.2 MB",
        notes: "Initial release with dark mode and voice input.",
        download: "#",
        changelog: "#"
      }
    ];

    const list = document.getElementById("versions-list");

    versions.forEach(v => {
      const card = document.createElement("div");
      card.className = "version-card";
      card.innerHTML = `
        <div class="version-header">
          <div class="version-number">${v.version}</div>
          <div class="version-type ${v.type.toLowerCase()}">${v.type}</div>
        </div>
        <div class="version-body">
          <p><strong>Date:</strong> ${v.date}</p>
          <p><strong>Size:</strong> ${v.size}</p>
          <p><strong>Notes:</strong> ${v.notes}</p>
        </div>
        <div class="version-footer">
          <a href="${v.download}">⬇️ Download</a>
          <a href="${v.changelog}">📝 Changelog</a>
        </div>
      `;
      list.appendChild(card);
    });
