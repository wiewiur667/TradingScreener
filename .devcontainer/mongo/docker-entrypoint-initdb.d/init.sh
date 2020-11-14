#!/bin/bash
echo "Migrating data"
mongoimport  --host localhost --db=trading --collection=instruments.trading212.cfd.commodity --type=csv --file=/docker-entrypoint-initdb.d/data/trading212/trading212_cfd_commodities.csv --headerline --mode upsert --upsertFields=Instrument
mongoimport --host localhost --db=trading --collection=instruments.trading212.cfd.forex --type=csv --file=/docker-entrypoint-initdb.d/data/trading212/trading212_cfd_forex.csv --headerline --mode upsert --upsertFields=Instrument
mongoimport --host localhost --db=trading --collection=instruments.trading212.cfd.index --type=csv --file=/docker-entrypoint-initdb.d/data/trading212/trading212_cfd_indices.csv --headerline --mode upsert --upsertFields=Instrument
mongoimport --host localhost --db=trading --collection=instruments.trading212.cfd.stock --type=csv --file=/docker-entrypoint-initdb.d/data/trading212/trading212_cfd_stocks.csv --headerline --mode upsert --upsertFields=Instrument
mongoimport --host localhost --db=trading --collection=instruments.trading212.equity --type=csv --file=/docker-entrypoint-initdb.d/data/trading212/trading212_equities.csv --headerline --mode upsert --upsertFields=Instrument
echo "Finished migrating data"