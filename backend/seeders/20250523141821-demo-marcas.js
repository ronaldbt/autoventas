'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const fecha = new Date();

    const marcas = [
      'Abarth', 'Abat', 'Acura', 'Aerovan', 'Aiways', 'Alfa Romeo',
      'Alpha Motor', 'Aston Martin', 'Audi', 'Austin', 'Autorrad', 'Aveling-Barford',
      'BAC', 'BAIC', 'BMW', 'BYD', 'Baojun', 'Bentley',
      'Bitter', 'Bollinger', 'Borgward', 'Brilliance', 'Bugatti', 'Buick',
      'Cadillac', 'Can-Am', 'Canoo', 'Changan', 'Chery', 'Chevrolet',
      'Chrysler', 'Citroën', 'Cupra', 'DFLM', 'DS Automobiles', 'Dacia',
      'Daewoo', 'Daihatsu', 'Datsun', 'Dfm', 'Dfsk', 'Dodge',
      'Dongfeng', 'Ds', 'Everus', 'Exeed', 'FAW', 'Faraday Future',
      'Ferrari', 'Fiat', 'Fisker', 'Ford', 'Foton', 'Freightliner',
      'GAZ', 'GMC', 'Gac', 'Gac Gonow', 'Gac Motor', 'Gecko',
      'Geely', 'Genesis', 'Great Wall', 'HSV', 'Hafei', 'Haima',
      'Haval', 'Higer', 'Honda', 'Hongqi', 'Hozon', 'Huanghai - Sg',
      'Hudson', 'Hummer', 'Hyundai', 'Infiniti', 'International', 'Iran Khodro',
      'Isuzu', 'Iveco', 'JAC', 'Jaecoo', 'Jaguar', 'Jeep',
      'Jetour', 'Jim', 'Jinbei', 'Jmc', 'Kaiyi', 'Kamaz',
      'Karry', 'Kawasaki', 'Kenbo', 'Kenworth', 'Kia', 'Koenigsegg',
      'Kyc', 'Lada', 'Lamborghini', 'Lancia', 'Land Rover', 'Landking',
      'Leapmotor', 'Lexus', 'Lifan', 'Lincoln', 'Livan', 'Lotus',
      'Lucid', 'Luxgen', 'Lynk & Co', 'MAN', 'MG', 'Mahindra',
      'Maple', 'Maruti Suzuki', 'Maserati', 'Maxus', 'Mazda', 'McLaren',
      'Mercedes-Benz', 'Mercury', 'Mini', 'Mitsubishi', 'Mitsubishi-Fuso', 'Moskvich',
      'NIO', 'Nissan', 'Oldsmobile', 'Omoda', 'Opel', 'Packard',
      'Pagani', 'Perodua', 'Peterbilt', 'Peugeot', 'Piaggio', 'Pininfarina',
      'Plymouth', 'Polaris', 'Polestar', 'Pontiac', 'Porsche', 'Proton',
      'RAM', 'Radical', 'Range Rover', 'Renault', 'Riddara', 'Rimac',
      'Rivian', 'Rolls-Royce', 'Rover', 'SEAT', 'Saab', 'Saipa',
      'Samsung', 'Saturn', 'Scion', 'Seres', 'Shineray', 'Simca',
      'Skoda', 'Smart', 'Soueast', 'SsangYong', 'Subaru', 'Suzuki',
      'Swm', 'TVR', 'Tata', 'Tesla', 'Toyota', 'Trabant',
      'Triumph', 'UAZ', 'Vauxhall', 'VinFast', 'Volkswagen', 'Voltera',
      'Volvo', 'Voyah', 'Wartburg', 'Weimar', 'Western Star', 'Willys',
      'Wuling', 'XPeng', 'Yamaha', 'Yudo', 'ZAZ', 'Zenos',
      'Zna', 'Zotye', 'Zxauto'
    ]

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
