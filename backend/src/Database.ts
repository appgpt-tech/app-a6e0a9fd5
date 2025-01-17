//Source code generated by AppGPT (www.appgpt.tech)

//Class to create tables and seed new database
import { DataSource } from 'typeorm';
import { DBConfiguration } from './Configuration';
import { SettingsEntity } from './db/Settings.entity';
//autogenerate imports based on resources
import { DataSourceEntity } from './db/DataSource.entity';
import { PredictionModelEntity } from './db/PredictionModel.entity';
import { AlertEntity } from './db/Alert.entity';
import { AnalysisEntity } from './db/Analysis.entity';
import { RealtimeDataEntity } from './db/RealtimeData.entity';

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [
      SettingsEntity,
      DataSourceEntity,
      PredictionModelEntity,
      AlertEntity,
      AnalysisEntity,
      RealtimeDataEntity,
    ];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables

    await Database.Seed();
  }
  static async Seed() {
    let data: any = {
      DataSource: [
        {
          Name: 'Round 1',
          Type: 'Historical',
          Duration: 5.2,
          Timestamp: '2023-04-01T12:00:00Z',
        },
        {
          Name: 'Round 2',
          Type: 'Historical',
          Duration: 7.4,
          Timestamp: '2023-04-01T12:05:00Z',
        },
        {
          Name: 'Round 3',
          Type: 'Historical',
          Duration: 3.8,
          Timestamp: '2023-04-01T12:10:00Z',
        },
        {
          Name: 'Round 4',
          Type: 'Historical',
          Duration: 6.1,
          Timestamp: '2023-04-01T12:15:00Z',
        },
        {
          Name: 'Round 5',
          Type: 'Historical',
          Duration: 4.5,
          Timestamp: '2023-04-01T12:20:00Z',
        },
      ],
      PredictionModel: [
        {
          Name: 'Basic Trend Model',
          Type: 'Historical Data',
          Description:
            'A model that analyzes past game rounds to identify basic trends and patterns.',
          Parameters: 'Window size: 10 rounds',
        },
        {
          Name: 'Advanced Prediction Model',
          Type: 'Machine Learning',
          Description:
            'Utilizes machine learning algorithms to predict the flight time based on complex patterns and historical data.',
          Parameters:
            'Algorithm: Random Forest, Features: Duration, Timestamp, Rounds',
        },
        {
          Name: 'Real-time Analyzer',
          Type: 'Real-time Data',
          Description:
            'Analyzes live game data to provide immediate predictions and insights.',
          Parameters: 'Data refresh rate: 1 second',
        },
        {
          Name: 'Volatility Assessment Model',
          Type: 'Historical Data',
          Description:
            "Assesses the volatility of the game rounds to predict sudden 'fly away' events.",
          Parameters: 'Volatility threshold: 0.5, Window size: 20 rounds',
        },
        {
          Name: 'Pattern Recognition Model',
          Type: 'Machine Learning',
          Description:
            'Identifies and learns from patterns in game round data to improve prediction accuracy over time.',
          Parameters:
            'Algorithm: Neural Network, Layers: 3, Nodes per layer: 128',
        },
      ],
      Alert: [
        {
          user: 'User1',
          gameRound: 'Round123',
          alertType: 'Fly Away Alert',
          timestamp: '2023-04-01T14:30:00Z',
        },
        {
          user: 'User2',
          gameRound: 'Round124',
          alertType: 'High Risk Alert',
          timestamp: '2023-04-01T15:00:00Z',
        },
        {
          user: 'User3',
          gameRound: 'Round125',
          alertType: 'Fly Away Alert',
          timestamp: '2023-04-01T15:30:00Z',
        },
        {
          user: 'User4',
          gameRound: 'Round126',
          alertType: 'Safe Bet Alert',
          timestamp: '2023-04-01T16:00:00Z',
        },
        {
          user: 'User5',
          gameRound: 'Round127',
          alertType: 'Fly Away Alert',
          timestamp: '2023-04-01T16:30:00Z',
        },
      ],
      Analysis: [
        {
          Name: 'Trend Analysis 1',
          Type: 'Trend',
          DataSource: 'Game Rounds',
          ChartGraphType: 'Line',
          Timestamp: '2023-04-01T12:00:00Z',
        },
        {
          Name: 'Prediction Accuracy',
          Type: 'Prediction',
          DataSource: 'Historical Data',
          ChartGraphType: 'Bar',
          Timestamp: '2023-04-02T12:00:00Z',
        },
        {
          Name: 'Real-time Performance',
          Type: 'Real-time',
          DataSource: 'Live Game',
          ChartGraphType: 'Scatter',
          Timestamp: '2023-04-03T12:00:00Z',
        },
        {
          Name: 'Outcome Distribution',
          Type: 'Distribution',
          DataSource: 'Game Rounds',
          ChartGraphType: 'Histogram',
          Timestamp: '2023-04-04T12:00:00Z',
        },
        {
          Name: 'Pattern Recognition',
          Type: 'Pattern',
          DataSource: 'Historical Data',
          ChartGraphType: 'Pie',
          Timestamp: '2023-04-05T12:00:00Z',
        },
      ],
      RealtimeData: [
        {
          GameRound: 'Round 1',
          Timestamp: '2023-04-01T12:00:00Z',
          Data: 'Duration: 15 seconds, Multiplier: 1.5x',
          Analysis:
            'Short duration, low multiplier. Pattern suggests cautious play.',
        },
        {
          GameRound: 'Round 2',
          Timestamp: '2023-04-01T12:05:00Z',
          Data: 'Duration: 30 seconds, Multiplier: 5.0x',
          Analysis:
            'Longer duration, high multiplier. Indicates a riskier round.',
        },
        {
          GameRound: 'Round 3',
          Timestamp: '2023-04-01T12:10:00Z',
          Data: 'Duration: 8 seconds, Multiplier: 1.2x',
          Analysis:
            "Very short duration, very low multiplier. High likelihood of early 'fly away'.",
        },
        {
          GameRound: 'Round 4',
          Timestamp: '2023-04-01T12:15:00Z',
          Data: 'Duration: 25 seconds, Multiplier: 3.5x',
          Analysis: 'Moderate duration and multiplier. Balanced risk.',
        },
        {
          GameRound: 'Round 5',
          Timestamp: '2023-04-01T12:20:00Z',
          Data: 'Duration: 40 seconds, Multiplier: 8.0x',
          Analysis:
            'Long duration, very high multiplier. Rare high-reward round.',
        },
      ],
    };
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true) {
      console.log('   Seeding database...');
      await this.SeedResource('DataSourceEntity', data.DataSource);
      await this.SeedResource('PredictionModelEntity', data.PredictionModel);
      await this.SeedResource('AlertEntity', data.Alert);
      await this.SeedResource('AnalysisEntity', data.Analysis);
      await this.SeedResource('RealtimeDataEntity', data.RealtimeData);
      await this.SeedResource('SettingsEntity', {
        settingname: 'isSeeded',
        settingvalue: 'true',
      });
    } else {
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository('SettingsEntity');
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: 'isSeeded',
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table ' + resourceName);
    await repo.upsert(resourceData, ['id']);
  }
}