# Next.js OpenJira App
You need the DB to run locally
```
docker-compose up -d
```

MongoDB Local URL:
```
mongodb://localhost:27017
```

## Configure the environment variables
Rename the file __.env.template__ to __.env__

---

## Fill the database with test information

Call to: (you can do it with postman)
```
http://localhost:3000/api/seed
```
