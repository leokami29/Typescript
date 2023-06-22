interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: string;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Leonel",
    year: "2018",
  },
};

const song = "New Song";

const {
  song: anotherSong,
  songDuration: duration, details,
} = audioPlayer;

const { author: author } = details;

// console.log("Song: ", anotherSong);
// console.log("Duration: ", duration);
// // console.log("Song: ", details);
// console.log("Autor: ", author);


const [, , trnuk = 'Not Foud']: string[] = ['Goku','Vegeta']


console.log('Personaje 3:', trnuk)














export {};
