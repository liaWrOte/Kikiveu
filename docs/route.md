# Routes

## Routes Back-office

| URL | HTTP Method | Controller | Name_Method | Contenu | Comment |
| --- | ----------- | ---------- | ----------- | ------- | ------- |
| `/admin` | `GET` | `MainController` | `admin_home_browse` | Listes des 10 derniers utilisateurs, évènements et commentaires | |
| --- | ----------- | ---------- | ----------- | ------- | ------- |
| `/admin/comment` | `GET` | `CommentController` | `admin_comment_browse` |Liste de tous les commentaires | |
| `/admin/comment/{id}` | `GET` | `CommentController` | `admin_comment_read` | Page pour visualiser un commentaire | {id} => id du commentaire |
| `/admin/comment/edit/{id}` | `GET` `POST` | `CommentController` | `admin_comment_edit` | Formulaire d'edition d'un commentaire | {id} => id du commentaire |
| `/admin/comment/add` | `GET` `POST` | `CommentController` | `admin_comment_add` | Formulaire d'ajout d'un commentaire | |
| `/admin/comment/delete/{id}` | `DELETE` | `CommentController` | `admin_comment_delete` | Suppression d'un commentaire | {id}=> id du commentaire |
| --- | ----------- | ---------- | ----------- | ------- | ------- |
| `/admin/event` | `GET` | `EventController` | `admin_event_browse` | Liste de tous les évènements | |
| `/admin/event/{id}` | `GET` | `EventController` | `admin_event_read` | Page pour visualiser un évènement | {id} => id de l'évènement |
| `/admin/event/edit/{id}` | `GET` `POST` | `EventController` | `admin_event_edit` | Formulaire d'edition d'un évènement | {id} => id de l'évènement |
| `/admin/event/add` | `GET` `POST` | `EventController` | `admin_event_add` | Formulaire d'ajout d'un évènement | |
| `/admin/event/delete/{id}` | `DELETE` | `EventController` | `admin_event_delete` | Suppression d'un évènement | {id}=> id de l'évènement|
| --- | ----------- | ---------- | ----------- | ------- | ------- |
| `/admin/user` | `GET` | `UserController` | `admin_user_browse` | Liste de tous les utilisateurs | |
| `/admin/user/{id}` | `GET` | `UserController` | `admin_user_read` | Page pour visualiser un utilisateur | {id} => id de l'utilisateur |
| `/admin/user/edit/{id}` | `GET` `POST` | `UserController` | `admin_user_edit` | Formulaire d'edition d'un utilisateur | {id} => id de l'utilisateur |
| `/admin/user/add` | `GET` `POST` | `UserController` | `admin_user_add` | Formulaire d'ajout d'un utilisateur | |
| `/admin/user/delete/{id}` | `DELETE` | `UserController` | `admin_user_delete` | Suppression d'un utilisateur | {id}=> id de l'utilisateur|
| --- | ----------- | ---------- | ----------- | ------- | ------- |
| `/admin/tag` | `GET` | `TagController` | `admin_tag_browse` | Liste de tous les tags | |
| `/admin/tag/{id}` | `GET` | `TagController` | `admin_tag_read` | Page pour visualiser un tag | {id} => id de l'tag |
| `/admin/tag/edit/{id}` | `GET` `POST` | `TagController` | `admin_tag_edit` | Formulaire d'edition d'un tag | {id} => id du tag |
| `/admin/tag/add` | `GET` `POST` | `TagController` | `admin_tag_add` | Formulaire d'ajout d'un tag | |
| `/admin/tag/delete/{id}` | `DELETE` | `TagController` | `admin_tag_delete` | Suppression d'un tag | {id}=> id du tag|
| --- | ----------- | ---------- | ----------- | ------- | ------- |
| `/admin/character` | `GET` | `CharacterController` | `admin_character_browse` | Liste de tous les characters | |
| `/admin/character/{id}` | `GET` | `CharacterController` | `admin_character_read` | Page pour visualiser un character | {id} => id de l'character |
| `/admin/character/edit/{id}` | `GET` `POST` | `CharacterController` | `admin_character_edit` | Formulaire d'edition d'un character | {id} => id du character |
| `/admin/character/add` | `GET` `POST` | `CharacterController` | `admin_character_add` | Formulaire d'ajout d'un character | |
| `/admin/character/delete/{id}` | `DELETE` | `CharacterController` | `admin_character_delete` | Suppression d'un character | {id}=> id du character|
| --- | ----------- | ---------- | ----------- | ------- | ------- |
| `/admin/mood` | `GET` | `MoodController` | `admin_mood_browse` | Liste de tous les moods | |
| `/admin/mood/{id}` | `GET` | `MoodController` | `admin_mood_read` | Page pour visualiser un mood | {id} => id de l'mood |
| `/admin/mood/edit/{id}` | `GET` `POST` | `MoodController` | `admin_mood_edit` | Formulaire d'edition d'un mood | {id} => id du mood |
| `/admin/mood/add` | `GET` `POST` | `MoodController` | `admin_mood_add` | Formulaire d'ajout d'un mood | |
| `/admin/mood/delete/{id}` | `DELETE` | `MoodController` | `admin_mood_delete` | Suppression d'un mood | {id}=> id du mood|
| --- | ----------- | ---------- | ----------- | ------- | ------- |
| `/admin/discussion` | `GET` | `DiscussionController` | `admin_discussion_browse` | Affiche toutes les discussions | |
| `/admin/discussion/{id}` | `DiscussionController` | `admin_discussion_ read` | Permet de voir une discussion | {id} => id de la discussion |
| `/admin/discussion/edit/{id}` | `GET` `POST` | `DiscussionController` | `admin_discussion_edit` | formulaire d'édition d'une discussion |  {id} => id de la discussion |
| `/admin/discussion/delete/{id}` | `DELETE` | `DiscussionController` | `admin_discussion_ delete` |supression d'un discussion | {id} => id de la discussion |

## Route API

| URL | HTTP Method | Controller | Name_Method | Contenu | Comment |
| --- | ----------- | ---------- | ----------- | ------- | ------- |
| `/` | `POST` | `Api\MainController` | `api_v1_connexion` | Connexion d'un utilisateur | réponse APi : info utilisateur |
| `/signin` | `POST` | `Api\MainController` | `api_v1_signin` | Inscription d'un utilisateur | réponse API : info nouvelle utilisateur |
| --- | ----------- | ---------- | ----------- | ------- | ------- |
| `/user` | `GET` | `Api\UserController` | `api_v1_read` | Récupère les infos utilisateur | réponse Api : info utilisateur |
| `/user/edit/{id}` | `PUT` | `Api\UserController` |  `api_v1_edit` | Edition des infos utilisateur | réponse Api : code HTTP 201 |
| `/user/edit/{id}` | `PATCH` | `Api\UserController` | `api_v1_edit` | Patch d'un user (modification de la localisation) | réponse Api : code HTTP 200 |
| `/user/delete/{id}` | `DELETE` | `Api\UserController` | `api_v1_edit` | Supression d'un utilisateur | réponse Api : code HTTP 200 |
| --- | ----------- | ---------- | ----------- | ------- | ------- |
| `/comment/{id}` | `GET` | `Api\CommentController` | `api_v1_browse` | Affichage des commentaires en fonction de l'évènement | {id} => id de l'évènement; Réponse Api : retourne les commentaires de l'évènement |
| `/comment/add` | `POST` | `Api\CommentController` | `api_v1_add` | Permet l'ajour d'un commentaire | Réponse Api : code HTTP 200 |
| --- | ----------- | ---------- | ----------- | ------- | ------- |
| `/event` | `GET` | `Api\EventController` | `api_v1_browse` | Données pour afficher tous les évènements | réponse Api: tous les évènements |
| `/event/{id}` | `GET` | `Api\EventController` | `api_v1_read` | Données pour un évènement | {id} => id de l'évènement; réponse Api: les infos d'un évènement |
| `/event/edit/{id}` | `POST` | `Api\EventController` | `api_v1_edit` | Envoi de données pour modifier un évènement | {id} => id de l'événement Réponse Api: code HTTP 201 |
| --- | ----------- | ---------- | ----------- | ------- | ------- |
| `/tag` | `GET` | `Api\TagController` | `api_v1_browse` | Données pour afficher tous les tags | réponse Api: tous les tags |
| --- | ----------- | ---------- | ----------- | ------- | ------- |
| `/contact` | `POST` | `Api\ContactController` | `api_v1_browse` | Envoi de données pour signaler une prise de contact ou une signalisation |   |
