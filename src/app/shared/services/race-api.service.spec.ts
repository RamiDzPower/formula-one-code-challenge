import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RacePayload } from '../interfaces/race.interface';

import { RaceApiService } from './race-api.service';

const limit = environment.page_limit;
const offset = environment.page_offset;

describe('Service: DriverApiService', () => {
  let service: RaceApiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new RaceApiService(httpClientSpy);
  });

  it('Should return expected values from Constructor API', (done: DoneFn) => {
    const expectedValue: RacePayload = {
      MRData: {
        xmlns: 'http://ergast.com/mrd/1.4',
        series: 'f1',
        url: 'http://ergast.com/api/f1/2005.json',
        limit: '100',
        offset: '0',
        total: '19',
        RaceTable: {
          season: '2005',
          Races: [
            {
              season: '2005',
              round: '1',
              url: 'http://en.wikipedia.org/wiki/2005_Australian_Grand_Prix',
              raceName: 'Australian Grand Prix',
              Circuit: {
                circuitId: 'albert_park',
                url: 'http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit',
                circuitName: 'Albert Park Grand Prix Circuit',
                Location: {
                  lat: '-37.8497',
                  long: '144.968',
                  locality: 'Melbourne',
                  country: 'Australia',
                },
              },
              date: '2005-03-06',
              time: '14:00:00Z',
            },
            {
              season: '2005',
              round: '2',
              url: 'http://en.wikipedia.org/wiki/2005_Malaysian_Grand_Prix',
              raceName: 'Malaysian Grand Prix',
              Circuit: {
                circuitId: 'sepang',
                url: 'http://en.wikipedia.org/wiki/Sepang_International_Circuit',
                circuitName: 'Sepang International Circuit',
                Location: {
                  lat: '2.76083',
                  long: '101.738',
                  locality: 'Kuala Lumpur',
                  country: 'Malaysia',
                },
              },
              date: '2005-03-20',
              time: '15:00:00Z',
            },
            {
              season: '2005',
              round: '3',
              url: 'http://en.wikipedia.org/wiki/2005_Bahrain_Grand_Prix',
              raceName: 'Bahrain Grand Prix',
              Circuit: {
                circuitId: 'bahrain',
                url: 'http://en.wikipedia.org/wiki/Bahrain_International_Circuit',
                circuitName: 'Bahrain International Circuit',
                Location: {
                  lat: '26.0325',
                  long: '50.5106',
                  locality: 'Sakhir',
                  country: 'Bahrain',
                },
              },
              date: '2005-04-03',
              time: '14:30:00Z',
            },
            {
              season: '2005',
              round: '4',
              url: 'http://en.wikipedia.org/wiki/2005_San_Marino_Grand_Prix',
              raceName: 'San Marino Grand Prix',
              Circuit: {
                circuitId: 'imola',
                url: 'http://en.wikipedia.org/wiki/Autodromo_Enzo_e_Dino_Ferrari',
                circuitName: 'Autodromo Enzo e Dino Ferrari',
                Location: {
                  lat: '44.3439',
                  long: '11.7167',
                  locality: 'Imola',
                  country: 'Italy',
                },
              },
              date: '2005-04-24',
              time: '14:00:00Z',
            },
            {
              season: '2005',
              round: '5',
              url: 'http://en.wikipedia.org/wiki/2005_Spanish_Grand_Prix',
              raceName: 'Spanish Grand Prix',
              Circuit: {
                circuitId: 'catalunya',
                url: 'http://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya',
                circuitName: 'Circuit de Barcelona-Catalunya',
                Location: {
                  lat: '41.57',
                  long: '2.26111',
                  locality: 'Montmeló',
                  country: 'Spain',
                },
              },
              date: '2005-05-08',
              time: '14:00:00Z',
            },
            {
              season: '2005',
              round: '6',
              url: 'http://en.wikipedia.org/wiki/2005_Monaco_Grand_Prix',
              raceName: 'Monaco Grand Prix',
              Circuit: {
                circuitId: 'monaco',
                url: 'http://en.wikipedia.org/wiki/Circuit_de_Monaco',
                circuitName: 'Circuit de Monaco',
                Location: {
                  lat: '43.7347',
                  long: '7.42056',
                  locality: 'Monte-Carlo',
                  country: 'Monaco',
                },
              },
              date: '2005-05-22',
              time: '14:00:00Z',
            },
            {
              season: '2005',
              round: '7',
              url: 'http://en.wikipedia.org/wiki/2005_European_Grand_Prix',
              raceName: 'European Grand Prix',
              Circuit: {
                circuitId: 'nurburgring',
                url: 'http://en.wikipedia.org/wiki/N%C3%BCrburgring',
                circuitName: 'Nürburgring',
                Location: {
                  lat: '50.3356',
                  long: '6.9475',
                  locality: 'Nürburg',
                  country: 'Germany',
                },
              },
              date: '2005-05-29',
              time: '14:00:00Z',
            },
            {
              season: '2005',
              round: '8',
              url: 'http://en.wikipedia.org/wiki/2005_Canadian_Grand_Prix',
              raceName: 'Canadian Grand Prix',
              Circuit: {
                circuitId: 'villeneuve',
                url: 'http://en.wikipedia.org/wiki/Circuit_Gilles_Villeneuve',
                circuitName: 'Circuit Gilles Villeneuve',
                Location: {
                  lat: '45.5',
                  long: '-73.5228',
                  locality: 'Montreal',
                  country: 'Canada',
                },
              },
              date: '2005-06-12',
              time: '13:00:00Z',
            },
            {
              season: '2005',
              round: '9',
              url: 'http://en.wikipedia.org/wiki/2005_United_States_Grand_Prix',
              raceName: 'United States Grand Prix',
              Circuit: {
                circuitId: 'indianapolis',
                url: 'http://en.wikipedia.org/wiki/Indianapolis_Motor_Speedway',
                circuitName: 'Indianapolis Motor Speedway',
                Location: {
                  lat: '39.795',
                  long: '-86.2347',
                  locality: 'Indianapolis',
                  country: 'USA',
                },
              },
              date: '2005-06-19',
              time: '14:00:00Z',
            },
            {
              season: '2005',
              round: '10',
              url: 'http://en.wikipedia.org/wiki/2005_French_Grand_Prix',
              raceName: 'French Grand Prix',
              Circuit: {
                circuitId: 'magny_cours',
                url: 'http://en.wikipedia.org/wiki/Circuit_de_Nevers_Magny-Cours',
                circuitName: 'Circuit de Nevers Magny-Cours',
                Location: {
                  lat: '46.8642',
                  long: '3.16361',
                  locality: 'Magny Cours',
                  country: 'France',
                },
              },
              date: '2005-07-03',
              time: '14:00:00Z',
            },
            {
              season: '2005',
              round: '11',
              url: 'http://en.wikipedia.org/wiki/2005_British_Grand_Prix',
              raceName: 'British Grand Prix',
              Circuit: {
                circuitId: 'silverstone',
                url: 'http://en.wikipedia.org/wiki/Silverstone_Circuit',
                circuitName: 'Silverstone Circuit',
                Location: {
                  lat: '52.0786',
                  long: '-1.01694',
                  locality: 'Silverstone',
                  country: 'UK',
                },
              },
              date: '2005-07-10',
              time: '14:00:00Z',
            },
            {
              season: '2005',
              round: '12',
              url: 'http://en.wikipedia.org/wiki/2005_German_Grand_Prix',
              raceName: 'German Grand Prix',
              Circuit: {
                circuitId: 'hockenheimring',
                url: 'http://en.wikipedia.org/wiki/Hockenheimring',
                circuitName: 'Hockenheimring',
                Location: {
                  lat: '49.3278',
                  long: '8.56583',
                  locality: 'Hockenheim',
                  country: 'Germany',
                },
              },
              date: '2005-07-24',
              time: '14:00:00Z',
            },
            {
              season: '2005',
              round: '13',
              url: 'http://en.wikipedia.org/wiki/2005_Hungarian_Grand_Prix',
              raceName: 'Hungarian Grand Prix',
              Circuit: {
                circuitId: 'hungaroring',
                url: 'http://en.wikipedia.org/wiki/Hungaroring',
                circuitName: 'Hungaroring',
                Location: {
                  lat: '47.5789',
                  long: '19.2486',
                  locality: 'Budapest',
                  country: 'Hungary',
                },
              },
              date: '2005-07-31',
              time: '14:00:00Z',
            },
            {
              season: '2005',
              round: '14',
              url: 'http://en.wikipedia.org/wiki/2005_Turkish_Grand_Prix',
              raceName: 'Turkish Grand Prix',
              Circuit: {
                circuitId: 'istanbul',
                url: 'http://en.wikipedia.org/wiki/Istanbul_Park',
                circuitName: 'Istanbul Park',
                Location: {
                  lat: '40.9517',
                  long: '29.405',
                  locality: 'Istanbul',
                  country: 'Turkey',
                },
              },
              date: '2005-08-21',
              time: '15:00:00Z',
            },
            {
              season: '2005',
              round: '15',
              url: 'http://en.wikipedia.org/wiki/2005_Italian_Grand_Prix',
              raceName: 'Italian Grand Prix',
              Circuit: {
                circuitId: 'monza',
                url: 'http://en.wikipedia.org/wiki/Autodromo_Nazionale_Monza',
                circuitName: 'Autodromo Nazionale di Monza',
                Location: {
                  lat: '45.6156',
                  long: '9.28111',
                  locality: 'Monza',
                  country: 'Italy',
                },
              },
              date: '2005-09-04',
              time: '14:00:00Z',
            },
            {
              season: '2005',
              round: '16',
              url: 'http://en.wikipedia.org/wiki/2005_Belgian_Grand_Prix',
              raceName: 'Belgian Grand Prix',
              Circuit: {
                circuitId: 'spa',
                url: 'http://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps',
                circuitName: 'Circuit de Spa-Francorchamps',
                Location: {
                  lat: '50.4372',
                  long: '5.97139',
                  locality: 'Spa',
                  country: 'Belgium',
                },
              },
              date: '2005-09-11',
              time: '14:00:00Z',
            },
            {
              season: '2005',
              round: '17',
              url: 'http://en.wikipedia.org/wiki/2005_Brazilian_Grand_Prix',
              raceName: 'Brazilian Grand Prix',
              Circuit: {
                circuitId: 'interlagos',
                url: 'http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace',
                circuitName: 'Autódromo José Carlos Pace',
                Location: {
                  lat: '-23.7036',
                  long: '-46.6997',
                  locality: 'São Paulo',
                  country: 'Brazil',
                },
              },
              date: '2005-09-25',
              time: '14:00:00Z',
            },
            {
              season: '2005',
              round: '18',
              url: 'http://en.wikipedia.org/wiki/2005_Japanese_Grand_Prix',
              raceName: 'Japanese Grand Prix',
              Circuit: {
                circuitId: 'suzuka',
                url: 'http://en.wikipedia.org/wiki/Suzuka_Circuit',
                circuitName: 'Suzuka Circuit',
                Location: {
                  lat: '34.8431',
                  long: '136.541',
                  locality: 'Suzuka',
                  country: 'Japan',
                },
              },
              date: '2005-10-09',
              time: '14:00:00Z',
            },
            {
              season: '2005',
              round: '19',
              url: 'http://en.wikipedia.org/wiki/2005_Chinese_Grand_Prix',
              raceName: 'Chinese Grand Prix',
              Circuit: {
                circuitId: 'shanghai',
                url: 'http://en.wikipedia.org/wiki/Shanghai_International_Circuit',
                circuitName: 'Shanghai International Circuit',
                Location: {
                  lat: '31.3389',
                  long: '121.22',
                  locality: 'Shanghai',
                  country: 'China',
                },
              },
              date: '2005-10-16',
              time: '14:00:00Z',
            },
          ],
        },
      },
    };

    //Test best case scenario for expected values
    httpClientSpy.get.and.returnValue(of(expectedValue));

    service
      .fetch(parseInt(expectedValue.MRData.RaceTable.season), limit, offset)
      .subscribe((response) => {
        expect(response).toEqual(expectedValue, 'Expected value');
        done();
      }, done.fail);

    expect(httpClientSpy.get.calls.count()).toBe(1, 'for one call');
  });
});
