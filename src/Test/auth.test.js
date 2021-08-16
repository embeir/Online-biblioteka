import logged from '../components/Store/Reducers/auth';

test('reducers', () => {
    let state;
    state = reducers(undefined, {});
    expect(state).toEqual({logged:false});
  });