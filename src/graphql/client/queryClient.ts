import { gql } from 'graphql-tag';

const CURRENT_CONDITIONS_QUERY = gql`
  query CURRENT_CONDITIONS_QUERY($locationKey: String!) {
    getCurrentCondition(locationKey: $locationKey) {
      IsDayTime
      CloudCover
      PrecipitationType
      UVIndex
      PrecipitationSummary {
        PastHour {
          Metric {
            Value
          }
        }
      }
      Temperature {
        Metric {
          Value
        }
      }
      WeatherText
      RelativeHumidity
    }
  }
`;

const FIVEDAYS_FORECAST_QUERY = gql`
  query FIVEDAYS_FORECAST_QUERY($locationKey: String!) {
    getFiveDaysForecast(locationKey: $locationKey) {
      DailyForecasts {
        Date
        Temperature {
          Maximum {
            Value
          }
          Minimum {
            Value
          }
        }
        Day {
          HasPrecipitation
          PrecipitationType
          PrecipitationProbability
          CloudCover
          ThunderstormProbability
          RainProbability
          SnowProbability
          IceProbability
        }
        Night {
          HasPrecipitation
          PrecipitationType
          PrecipitationProbability
          CloudCover
          ThunderstormProbability
          RainProbability
          SnowProbability
          IceProbability
        }
        Sun {
          Rise
          Set
        }
      }
    }
  }
`;

const SHOPPING_LIST_QUERY = gql`
  query SHOPPING_LIST_QUERY($keyword: String!) {
    getShoppingList(keyword: $keyword) {
      keyword
      shoppingData {
        title
        link
        image
        lprice
      }
    }
  }
`;

export {
  CURRENT_CONDITIONS_QUERY,
  FIVEDAYS_FORECAST_QUERY,
  SHOPPING_LIST_QUERY,
};
