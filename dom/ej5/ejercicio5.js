 const albums = [
            "De Mysteriis Dom Sathanas",
            "Reign of Blood",
            "Ride the Lightning",
            "Painkiller",
            "Iron Fist",
        ];

const albumsList = document.querySelector("#albumsList");
for (const album of albums) {
    const li = document.createElement("li");
    li.textContent = album;
    albumsList.appendChild(li);
}