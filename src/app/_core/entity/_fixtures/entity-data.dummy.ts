import * as moment from 'moment-timezone';

export const questsByUserId: {[id: string]: GQL.IQuest[]} = {
  '1': [
    {userId: '1', specializationId: '1', datetime: moment().add(1, 'days').format(), difficulty: 1, expPoints: 30, questTypeId: '1'},
    {userId: '1', specializationId: '1', datetime: moment().add(2, 'days').format(), difficulty: 1, expPoints: 30, questTypeId: '1'},
    {userId: '1', specializationId: '1', datetime: moment().add(3, 'days').format(), difficulty: 1, expPoints: 30, questTypeId: '1'},
    {userId: '1', specializationId: '1', datetime: moment().add(4, 'days').format(), difficulty: 1, expPoints: 30, questTypeId: '1'},
    {userId: '1', specializationId: '1', datetime: moment().add(5, 'days').format(), difficulty: 1, expPoints: 30, questTypeId: '1'},
  ]
}