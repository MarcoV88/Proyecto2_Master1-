const streamers = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

document.querySelector('[data-function="toFilterStreamers"]').addEventListener("input", event => {
    const filteredStreamers = streamers.filter(streamer => streamer.name.includes(event.target.value));
    console.log(filteredStreamers);
});