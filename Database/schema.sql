CREATE DATABASE animesdatabase;

create user matthieu with password 'uci';

\c animesdatabase;

CREATE SCHEMA japanart;

CREATE TABLE japanart.Animes(
   AnimeID SERIAL,
   Name VARCHAR(50) NOT NULL,
   Episodes INT NOT NULL,
   AnimationStudio VARCHAR(50) NOT NULL,
   ReleaseDate DATE NOT NULL,
   PRIMARY KEY(AnimeID),
   UNIQUE(Name)
);

CREATE TABLE japanart.FanUser(
   UserID SERIAL,
   Username VARCHAR(50) NOT NULL,
   Firstname VARCHAR(50) NOT NULL,
   Lastname VARCHAR(50) NOT NULL,
   Birthday DATE NOT NULL,
   Mail VARCHAR(50) NOT NULL,
   Password VARCHAR(50) NOT NULL,
   PRIMARY KEY(UserID),
   UNIQUE(Mail)
);

CREATE TABLE japanart.UserComment(
   UserCommentID SERIAL,
   PublishedDate TIMESTAMP NOT NULL,
   NumberLike INT NOT NULL,
   Message TEXT NOT NULL,
   UserID INT NOT NULL,
   AnimeID INT NOT NULL,
   PRIMARY KEY(UserCommentID),
   FOREIGN KEY(UserID) REFERENCES japanart.FanUser(UserID),
   FOREIGN KEY(AnimeID) REFERENCES japanart.Animes(AnimeID)
);

CREATE TABLE japanart.AnimeList(
   AnimeListID SERIAL,
   CreationDate TIMESTAMP NOT NULL,
   Comment TEXT,
   UserID INT NOT NULL,
   PRIMARY KEY(AnimeListID),
   UNIQUE(UserID),
   FOREIGN KEY(UserID) REFERENCES japanart.FanUser(UserID)
);

CREATE TABLE japanart.Reference(
   AnimeID SERIAL,
   AnimeListID SERIAL,
   PRIMARY KEY(AnimeID, AnimeListID),
   FOREIGN KEY(AnimeID) REFERENCES japanart.Animes(AnimeID),
   FOREIGN KEY(AnimeListID) REFERENCES japanart.AnimeList(AnimeListID)
);

