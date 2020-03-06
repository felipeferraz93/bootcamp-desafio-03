import Sequelize from 'sequelize';

import Recipient from '../app/models/Recipient';
import User from '../app/models/User';
import Avatar from '../app/models/Avatar';
import Deliveryman from '../app/models/Deliveryman';
import Delivery from '../app/models/Delivery';
import Signature from '../app/models/Signature';
import Problem from '../app/models/Problem';

import databaseConfig from '../config/database';

const models = [
  User,
  Recipient,
  Avatar,
  Deliveryman,
  Delivery,
  Signature,
  Problem,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(
        model =>
          model && model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
