'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const fecha = new Date();

    const marcas = [
      'AITO', 'Acura', 'Aiways', 'Alfa Romeo', 'Alpha Motor', 'Aston Martin', 'Audi', 'BAIC', 'BAC', 'Baojun',
      'Bentley', 'Bitter', 'BMW', 'Bollinger', 'Borgward', 'Bugatti', 'Buick', 'BYD', 'Cadillac', 'Canoo',
      'Changan', 'Chery', 'Chevrolet', 'Chrysler', 'Citroën', 'Cupra', 'Dacia', 'Daewoo', 'Daihatsu', 'Dodge',
      'Dongfeng', 'DS Automobiles', 'Everus', 'FAW', 'Faraday Future', 'Ferrari', 'Fiat', 'Fisker', 'Ford',
      'Freightliner', 'GAZ', 'Genesis', 'Geely', 'GMC', 'Great Wall', 'Haima', 'Haval', 'Honda', 'Hongqi',
      'Hozon', 'HSV', 'Hummer', 'Hyundai', 'Infiniti', 'Iran Khodro', 'Isuzu', 'Iveco', 'JAC', 'Jaguar', 'Jeep',
      'Kamaz', 'Kenworth', 'Kia', 'Koenigsegg', 'Lada', 'Lamborghini', 'Land Rover', 'Leapmotor', 'Lexus',
      'Lincoln', 'Lucid', 'Luxgen', 'Mahindra', 'MAN', 'Maruti Suzuki', 'Maserati', 'Mazda', 'McLaren',
      'Mercedes-Benz', 'MG', 'Mini', 'Mitsubishi', 'Moskvich', 'NIO', 'Nissan', 'Oldsmobile', 'Opel', 'Pagani',
      'Peugeot', 'Perodua', 'Peterbilt', 'Pininfarina', 'Polestar', 'Pontiac', 'Proton', 'RAM', 'Radical',
      'Renault', 'Rimac', 'Rivian', 'Rolls-Royce', 'Saab', 'Saipa', 'Saturn', 'Scion', 'SEAT', 'Seres', 'Skoda',
      'Smart', 'Soueast', 'Subaru', 'Suzuki', 'Tata', 'Tesla', 'Toyota', 'Trabant', 'TVR', 'UAZ', 'Vauxhall',
      'VinFast', 'Volkswagen', 'Volvo', 'Voyah', 'Wartburg', 'Weimar', 'Western Star', 'Wuling', 'XPeng',
      'Yudo', 'ZAZ', 'Zenos', 'Zotye'
    ];

    const data = [...new Set(marcas)].map(nombre => ({
      nombre: nombre.trim(),
      pais_origen: null,
      createdAt: fecha,
      updatedAt: fecha
    }));

    await queryInterface.bulkInsert('Marcas', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Marcas', null, {});
  }
};
