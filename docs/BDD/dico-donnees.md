# Dictionnaire de données

| Nom | Type | Option | Description | Commentaire | Entité |
| --- | ---- | ------ | ----------- | ----------- | ------ |
| id | int | auto-increment, unsigned, PK | Id du tag | | Tags |
| name | varchar(50) | NOT NULL | Nom du tag | | Tags |
| picture | varchar(255) | | adresse de l'image | icône représentant le tag | Tags |
| --- | ---- | ------ | ----------- | ----------- | ------ |
| id | int | auto-increment, unsigned, PK | Id de l'évènement | | Events |
| name | varchar(255) | NOT NULL | Nom de l'évènement | | Events |
| locate | varchar(255) | NOT NULL | Localisation évènement | | Events |
| maxParticipant | tinyInt | NOT NULL, DEFAULT 0 | Nombre maximum de participant | | Events |
| datetime | date | NOT NULL | date et heure de l'évènement | format d-m-Y h:i | Events |
| duration | int | NOT NULL | durée de l'évènement | | Events |
| description | text | | Description de l'évènement | | Events |
| tagsId | int | | id d'un tag | permet de tagger un évènement | Events|
| userId | int | NOT NULL | id d'un utilisateur | permet de lier un utilisateur à l'évènement | Events |
| --- | ---- | ------ | ----------- | ----------- | ------ |
| id | int | auto-increment, unsigned, PK | id du commentaire | | Comments |
| title | varchar(255) | NOT NULL | Titre du commentaire | | Comments |
| body | text | NOT NULL | Contenu du commentaire | | Comments |
| eventId | int | NOT NULL | Id d'un évènement | relier le commentaire à l'évènement | Comments
| userId | int | NOT NULL | Id d'un utilisateur | auteur du commentaire | Comments
| --- | ---- | ------ | ----------- | ----------- | ------ |
| id | int | auto-increment, unsigned, PK | Id de l'utilisateur | | Users |
| firstname | varchar(50) | NOT NULL | Prénom de l'utilisateur | | Users |
| lastname | varchar (50) | NOT NULL | Nom de l'utilisateur | | Users |
| pseudo | varchar(50) | NOT NULL | Pseudonyme de l'utilisateur | | Users |
| password | varchar(255) | NOT NULL | Mot de passe de l'utilisateur | | Users |
| role | [json] | NOT NULL | Role de l'utilisateur sur le site | ROLE_ADMIN, ROLE_SUPERADMIN, ROLE_USER | Users |
| --- | ---- | ------ | ----------- | ----------- | ------ |
| id | int | auto--increment, unsigned, PK | Id des chiens | | Dogs |
| avatar | varchar(255) | DEFAULT (une image par defaut) | adresse de l'image | | Dogs |
| dogCondition | int | | Condition du chien | 0 chien mauvaise condition physique, 1 condition physique moyenne, 2 condition physique bonne, 3 Très bonne condition physique | Dogs |
| moodId | int | | Id de l'humeur du chien | | Dogs |
| userId | int | NOT NULL | Id de l'utilisateur propriétaire | | Dogs |
| --- | ---- | ----------- | ----------- | ------ |
| id | int | auto-increment, unsigned, PK | Id de l'humeur | | Moods |
| name | varchar(50) | NOT NULL | nom de l'humeur | | Moods
| picture | varchar(255) | NOT NULL | adresse de l'image | emoji représentant l'humeur du chien | Moods |
