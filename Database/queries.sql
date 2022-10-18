-- Display the information of all anime made by Studio Pierrot
SELECT * FROM japanart.Animes WHERE AnimationStudio = 'Studio Pierrot';

-- Display the name of all animes that are in the anime list
SELECT DISTINCT Name AS "Animes in the anime list" FROM japanart.Animes 
JOIN japanart.Reference AS Reference USING (AnimeID);

-- Display the name of all animes that are not in the anime list
SELECT Name AS "Animes that aren't in the anime list" FROM japanart.Animes
EXCEPT
SELECT Name FROM japanart.Animes
JOIN japanart.Reference AS Reference USING (AnimeID);

-- Display all users that have an anime favorite list
SELECT DISTINCT Username AS "Users that have an anime favorite list", Mail FROM japanart.FanUser AS FanUser 
INNER JOIN japanart.AnimeList AS AnimeList ON FanUser.UserID = AnimeList.UserID;

-- Display all users that have not an anime favorite list
SELECT DISTINCT Username AS "Users that have not an anime favorite list", Firstname AS "Firstname" FROM japanart.FanUser 
EXCEPT 
SELECT DISTINCT Username, Firstname FROM japanart.FanUser AS FanUser 
INNER JOIN japanart.AnimeList AS AnimeList ON FanUser.UserID = AnimeList.UserID; 


-- display the comments of all users (if they wrote one)
SELECT Username, Message AS Comment, PublishedDate AS Published, Animes.Name AS Anime FROM japanart.FanUser 
INNER JOIN japanart.UserComment USING (UserID) 
INNER JOIN japanart.Animes USING (AnimeId);