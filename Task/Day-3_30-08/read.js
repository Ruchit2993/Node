// const fs = require("fs");

// // Create a read stream for the big file
// const stream = fs.createReadStream("file.txt", {
//   highWaterMark: 1 * 1024 // read in 64KB chunks
// });

// // When a chunk of data is read
// stream.on("data", (chunk) => {
// //   console.log("Read", chunk.length, "bytes");
//   console.log(chunk.toString());
// });

// // When file reading is finished
// stream.on("end", () => {
//   console.log("Finished reading");
// });

// // If there is any error
// stream.on("error", (err) => {
//   console.error("Error while reading:", err);
// });


const fs = require("fs");

const stream = fs.createReadStream("file.txt", {
  encoding: "utf8",
  highWaterMark: 1024 // smaller chunk (1KB at a time)
});

let i = 0;
let currentChunk = "";
let typing = false;

function typeChar() {
  if (i < currentChunk.length) {
    process.stdout.write(currentChunk[i]);
    i++;
    setTimeout(typeChar, 50); // delay per character
  } else {
    typing = false; // done with this chunk
  }
}

stream.on("data", (chunk) => {
  currentChunk = chunk; // only keep this chunk
  i = 0;

  if (!typing) {
    typing = true;
    typeChar();
  }
});

stream.on("end", () => {
  console.log("\n✅ Finished reading smoothly");
});

stream.on("error", (err) => {
  console.error("Error while reading:", err);
});



// Node.js Streams are Asynchronous
// stream.on("data") fires whenever a chunk (like 1KB) is ready.
// It doesn’t wait for your setTimeout typing effect to finish.
// Multiple Chunks Arrive Quickly
// While your code was still typing characters from the first chunk, the second chunk arrived almost immediately.
// New typeChar() Started for Each Chunk
// Your code reset currentChunk = chunk and called typeChar() again.
// Now you had two loops printing at the same time:
// one typing from the old chunk
// one typing from the new chunk.
// Characters Interleaved
// Since both loops used process.stdout.write() simultaneously, characters from different chunks got mixed up (like "Te i V Tiss eVi...").
// No Synchronization
// There was nothing in your code ensuring that one chunk finished printing before the next started.
// That’s why the output looked scrambled.
// ✅ The Fix (Why Queue Works)
// A queue holds chunks that arrive early.
// Only one typing loop runs at a time.
// When the current chunk is finished, the next chunk is taken from the queue.
// This ensures sequential printing, no overlaps, no mixing.


