# dispatch-task

## summary

This is a basic api that handles deliveries for a courier. The api will show couriers along with their capacity and inventory. It will also be able to update the current inventory of the drivers

## Setup

The application is a simple express app than can be served locally by running
`cp .env.example .env && npm start`
The application will start ion port 8080 so the endpoint will be
`localhost:8080/courier`

## Endpoints

There are 6 endpoints which will control the main CRUD for the api, below are some basic examples of usage

Search for all couriers and their inventory

```bash
curl -X GET http://localhost:3000/couriers/
```

Search for one Courier by their ID

```bash
curl -X GET http://localhost:3000/couriers/1
```

Search courier by the max capacity

```bash
curl -X GET http://localhost:3000/couriers/lookup --data '
{
  "capacity_required": 45
}'
```

```bash
curl -X GET http://localhost:3000/couriers/lookup --data '
{
  "capacity_required": 45
}'
```

```bash
curl -X GET http://localhost:3000/couriers/lookup --data '
{
  "capacity_required": 45
}'
```

```bash
curl -X GET http://localhost:3000/couriers/lookup --data '
{
  "capacity_required": 45
}'
```
