function getAnime(animeId) {
  switch (animeId) {
    case "1":
      return {title: "Jujutsu Kaisen", studio: "MAPPA", date: "10/02/2020", synopsis: "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the King of Curses Yuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Metropolitan Jujutsu Technical High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer.", episode: "24"};
      break;
    case "2":
      return {title: "Steins Gate", studio: "White Fox", date: "04/06/2011", synopsis: "Eccentric scientist Rintarou Okabe has a never-ending thirst for scientific exploration. Together with his ditzy but well-meaning friend Mayuri Shiina and his roommate Itaru Hashida, Rintarou founds the Future Gadget Laboratory in the hopes of creating technological innovations that baffle the human psyche. Despite claims of grandeur, the only notable gadget the trio have created is a microwave that has the mystifying power to turn bananas into green goo. However, when Rintarou decides to attend neuroscientist Kurisu Makise's conference on time travel, he experiences a series of strange events that lead him to believe that there is more to the Phone Microwave gadget than meets the eye. Apparently able to send text messages into the past using the microwave, Rintarou dabbles further with the time machine, attracting the ire and attention of the mysterious organization SERN. Due to the novel discovery, Rintarou and his friends find themselves in an ever-present danger. As he works to mitigate the damage his invention has caused to the timeline, he is not only fighting a battle to save his loved ones, but also one against his degrading sanity.", episode: "24"};
      break;  
    default: 
      return {title: "An error has occurred, sorry for the inconvenience", studio: "N/A", date: "N/A", synopsis: "Anime not found", episode:"N/A"};
      break;
  }
};

module.exports = {getAnime};