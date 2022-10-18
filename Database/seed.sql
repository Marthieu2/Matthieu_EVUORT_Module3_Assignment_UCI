INSERT INTO japanart.Animes (AnimeID,Name,Episodes,AnimationStudio,ReleaseDate) VALUES 
(0001,'Black Clover',170,'Studio Pierrot','2021/03/30'),
(0002,'Dragon Ball Super',131,'Toei Animation','2018/03/25'),
(0003,'Boku no Hero Academia',13,'Bones','2016/06/26'),
(0004,'Kimetsu no Yaiba',26,'Ufotable','04/06/2019'),
(0005,'Steins Gate',24,'White Fox','04/06/2011');

INSERT INTO japanart.FanUser (UserID,Username,Firstname,Lastname,Birthday, Mail, Password) VALUES 
(111117799,'Marthieu2','Matthieu','EVUORT','2002/03/30','matthieu.evuort@efrei.net','Password1'),
(221229099,'VILL V','Ryan','SEBBANE','2002/05/29','ryan.sebbane@efrei.net','Password2'),
(331229033,'Velionaan :D','Guillaume','CLAVIER','2002/07/23','guillaume.clavier@efrei.net','Password3');

INSERT INTO japanart.UserComment (UserCommentID,PublishedDate,NumberLike,Message,UserID,AnimeID) VALUES 
(01,CURRENT_TIMESTAMP,1000,'One of the best anime ever',111117799,0002),
(02,CURRENT_TIMESTAMP,1101,'Just perfect !!!',111117799,0001),
(03,CURRENT_TIMESTAMP,1050,'Amazing !!!',221229099,0003);

INSERT INTO japanart.AnimeList (AnimeListID,CreationDate,Comment,UserID) VALUES 
(1,CURRENT_TIMESTAMP,'It is my favorite anime because the fights are very cool',111117799),
(2,CURRENT_TIMESTAMP,NULL,221229099);

INSERT INTO japanart.Reference(AnimeID, AnimeListID) VALUES
(0001,1),
(0002,1),
(0003,1),
(0001,2),
(0003,2);