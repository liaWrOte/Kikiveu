# Dictionnaire de données

| Nom | Type | Option | Description | Commentaire | Entité |
| --- | ---- | ------ | ----------- | ----------- | ------ |
| id | int | auto-increment, unsigned, PK | Id du tag | | Tags |
| name | varchar(50) | NOT NULL | Nom du tag | | Tags |
| --- | ---- | ------ | ----------- | ----------- | ------ |
| id | int | auto-increment, unsigned, PK | Id de l'évènement | | Events |
| locate | varchar(255) | NOT NULL | Localisation évènement | | Events |
| maxParticipant | tinyInt | NOT NULL, DEFAULT 0 | Nombre maximum de participant | | Events |
| datetime | date | NOT NULL | date et heure de l'évènement | format d-m-Y h:i | Events |
| duration | int | NULL | durée de l'évènement | | Events |
| description | text | NULL | Description de l'évènement | | Events |
| slug | varchar(255) | NOT NULL | Slug pour route event | | Events |
| tagsId | int | NOT NULL | id d'un tag | permet de tagger un évènement | Events |
| userId | int | NOT NULL | id d'un utilisateur | permet de lier un utilisateur à l'évènement | Events |
| --- | ---- | ------ | ----------- | ----------- | ------ |
| id | int | auto-increment, unsigned, PK | id du commentaire | | Comments |
| body | text | NOT NULL | Contenu du commentaire | | Comments |
| eventId | int | NOT NULL | Id d'un évènement | relier le commentaire à l'évènement | Comments |
| userId | int | NOT NULL | Id d'un utilisateur | auteur du commentaire | Comments |
| --- | ---- | ------ | ----------- | ----------- | ------ |
| id | int | auto-increment, unsigned, PK | Id de l'utilisateur | | Users |
| email | varchar() | UNIQUE | Email de l'utilisateur | | Users |
| pseudo | varchar(50) | NOT NULL | Pseudonyme de l'utilisateur | | Users |
| password | varchar(255) | NOT NULL | Mot de passe de l'utilisateur | | Users |
| role | [json] | NOT NULL | Role de l'utilisateur sur le site | ROLE_ADMIN, ROLE_SUPERADMIN, ROLE_USER | Users |
| slug | varchrar(255) | NOT NULL | Slug pour route utilisateur | | Users |
| status | tinyint | NULL, Default(1) |  status de l'utilisateur | Booléen 0:inactif 1:actif | Users |
| locate | varchar(255) | NOT NULL | localisation de l'utilisateur | | Users |
| --- | ---- | ------ | ----------- | ----------- | ------ |
| id | int | auto--increment, unsigned, PK | Id des chiens | | Dogs |
| name | varchar(255) | NOT NULL | nom du chien | | Dogs |
| avatar | varchar(255) | DEFAULT (une image par defaut) | nom de l'image | | Dogs |
| sex | tinyInt | NOT NULL | Sexe du chien | 0 femelle, 1 mâle | Dogs |
| TemperamentId | int | NULL | Id du caractère du chien |  | Dogs |
| age | int | NULL | âge du chien | 0 = moins de 1an, 1,2,3 âge du chien | Dogs |
| castrate | tinyInt | NOT NULL | castré ou non | 0 non, 1 oui | Dogs |
| moodId | int | NULL | Id de l'humeur du jour | | Dogs |
| userId | int | NOT NULL | Id de l'utilisateur propriétaire | | Dogs |
| stateId | int | NOT NULL | état de santé du chien | | Dogs |
| --- | ---- | ----------- | ----------- | ------ | ------ |
| id | int | auto-increment, unsigned, PK | Id de l'humeur | | Moods |
| name | varchar(50) | NOT NULL | nom de l'humeur | | Moods |
| --- | ---- | ------ | ----------- | ----------- | ------ |
| id | int | auto-increment, unsigned, PK | Id de la discussion | | Discussion |
| title | varchar(255) | NULL | Titre de la discussion | | Discussion |
| --- | ---- | ------ | ----------- | ----------- | ------ |
| id | int | auto-increment, unsigned, PK | Id du message | | Message |
| body | text | NOT NULL | contenu du message | | Message |
| userId | int | NOT NULL | Id d'un utilisateur | auteur du message | Message |
| discussionId | int | NOT NULL | Id d'une discussion | relier le message à la discussion | Message |
| --- | ---- | ------ | ----------- | ----------- | ------ |
| id | int | auto-increment, unsigned, PK |  Id du caractère | | Temperament |
| name | varchar(50) | NOT NULL | nom du caractère | | Temperament |
| --- | ---- | ------ | ----------- | ----------- | ------ |
| id | int auto-increment, PK | Id de l'état de santé du chien | | States |
| name | varchar(255) | NOT NULL | Nom de l'état de santé du chien | | States|
