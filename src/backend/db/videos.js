import { v4 as uuid } from "uuid";

/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: uuid(),
    title: "Akaash Singh's Defense of Apu",
    thumbnail: "/assets/video-thumbnails/akash-singh-apu.jpg",
    category: "podcast",
    channel: "PowerfulJRE",
    channelAvatar: "/assets/channel-avatar/joe-rogan.jpg",
    date: "Feb 9, 2022",
    embedLink: "https://www.youtube.com/embed/I5pVVmcSXVU",
  },
  {
    _id: uuid(),
    title: "LET'S GO. // Episode 4: Act II Kickoff - VALORANT",
    thumbnail: "/assets/video-thumbnails/yoru-valorant.jpg",
    category: "gaming",
    channel: "VALORANT",
    channelAvatar: "/assets/channel-avatar/valorant.jpg",
    date: "Mar 1, 2022",
    embedLink: "https://www.youtube.com/embed/rFY2sjbrCEk",
  },
  {
    _id: uuid(),
    title: "INNA - Nirvana",
    thumbnail: "/assets/video-thumbnails/nirvana-inna.jpg",
    category: "music",
    channel: "INNA",
    channelAvatar: "/assets/channel-avatar/inna.jpg",
    date: "Nov 28, 2017",
    embedLink: "https://www.youtube.com/embed/OfS1jFck8YQ",
  },
  {
    _id: uuid(),
    title: "Mac Studio Review: Double Trouble!",
    thumbnail: "/assets/video-thumbnails/mac-studio-marques-brownlee.jpg",
    category: "tech",
    channel: "Marques Brownlee",
    channelAvatar: "/assets/channel-avatar/marques-brownlee.jpg",
    date: "Mar 19, 2022",
    embedLink: "https://www.youtube.com/embed/wvhP1al3Ur4",
  },
  {
    _id: uuid(),
    title: "Traveling to the Happiest Country in the World!!",
    thumbnail:
      "/assets/video-thumbnails/travelling-to-happiest-country-yes-theory.jpg",
    category: "vlog",
    channel: "Yes Theory",
    channelAvatar: "/assets/channel-avatar/yes-theory.jpg",
    date: "Dec 1, 2019",
    embedLink: "https://www.youtube.com/embed/Qmi-Xwq-MEc",
  },
  {
    _id: uuid(),
    title: "Naruto Trains With Kakashi",
    thumbnail: "/assets/video-thumbnails/naruto-fights-kakashi.jpg",
    category: "anime",
    channel: "Dark Tobi",
    channelAvatar: "/assets/channel-avatar/dark-tobi.jpg",
    date: "Dec 5, 2020",
    embedLink: "https://www.youtube.com/embed/kAAkkmkRSbQ",
  },
];
