# Labenu Music Awards
Como você deve saber muito bem, o nosso querido chefinho Astrodev é uma pessoa com Networking incrível e ele conhece vários artistas estrelados. Além disso, ele também é um grande ~~megalomaníaco~~ visionário e está planejando fazer um grande evento: o **LAMA**, *Labenu Musical Awards*, um festival  com várias bandas famosas para a formatura da sua turma e, no final, vocês podem eleger a banda que mais gostaram! Entretanto, na opinião dele, vocês só serão merecedores se entregarem um sistema impecável que permita o gerenciamento completo desses shows.

As you may well know, our dear little chef Astrodev is an amazing Networking person and he knows a lot of star performers. In addition, he is also a great visionary ~~megalomaniac~~ and is planning to make a big event: the **LAMA**, Labenu Musical Awards, a festival with several famous bands for your class's graduation and, in the end, you can choose the band you liked the most! However, in his opinion, you will only be deserving if you deliver an impeccable system that allows for the complete management of these shows.

## Install

```sh
npm install
```

## Run Build

```sh
npm run build
```

## Run Dev

```sh
npm run dev
```

## Run Test

```sh
npm run test
```

## Run Migrations

```sh
npm run migrations
```

## Data Structure  
  
* ## Users
  * id
  * name
  * email
  * password
  * role: `"normal" || "admin"`

* ## Bands
  * id
  * name
  * musicGenre
  * responsible
   
---

## ENDPOINTS 

* ## User SignUp
  * Method: POST
  * Path: `/user/signup`
  * Body:
    * name (obrigatório)
    * email (obrigatório)
    * password (obrigatório)
    * role (obrigatório)
  * Response:
    * token

* ## User Login
  * Method: POST
  * Path: `/user/login`
  * Body:
    * email (obrigatório)
    * password (obrigatório)
  * Response:
    * token

* ## Create Band
  * Method: POST
  * Path: `/band/create`
  * headers:
    * authorization: token
  * Body:
    * name (obrigatório)
    * musicGenre (obrigatório)
    * responsible (obrigatório)


* ## Get band by id or name
  * Method: GET
  * Path: `/band?id=&name=`
  * Response: (return an error if nothing is found)
    * id
    * name
    * musicGenre
    * responsible
