export interface Goal {
    id: string,
    Description: string,
    Active: boolean
}

export interface Action {
    id: string,
    Description: string,
    Active: boolean
    Goalid: string
}

export const testGoalData: Goal[] = [
    {
        id: '1',
        Description: 'Improve Kitesurfing',
        Active: true
    },
    {
        id: '2',
        Description: 'Whiten Teeth',
        Active: true
    },
    {
        id: '3',
        Description: 'Sub 17m 5Km',
        Active: true
    },
    {
        id: '4',
        Description: 'Complete Spanish A1 exam',
        Active: true
    },
    {
        id: '5',
        Description: 'Learn to drive',
        Active: false
    }
];

export const testActionData: Action[] =  [
    {
        id: '101',
        Description: 'Watch video',
        Active: true,
        Goalid: '1'
    },
    {
        id: '102',
        Description: 'Book Tarifa for october',
        Active: true,
        Goalid: '1'
    },
    {
        id: '103',
        Description: 'Take kite stuff to New Zealand',
        Active: true,
        Goalid: '1'
    }
];