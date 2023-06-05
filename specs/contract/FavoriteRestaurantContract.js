const itActsAsFavoriteRestaurantModel = (favoriteRestaurants) => {
  it('should return the Restaurant that has been added', async () => {
    favoriteRestaurants.putResto({ id: 1 });
    favoriteRestaurants.putResto({ id: 2 });

    expect(await favoriteRestaurants.getResto(1))
      .toEqual({ id: 1 });
    expect(await favoriteRestaurants.getResto(2))
      .toEqual({ id: 2 });
    expect(await favoriteRestaurants.getResto(3))
      .toEqual(undefined);
  });

  it('should refuse a Restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurants.putResto({ aProperty: 'property' });

    expect(await favoriteRestaurants.getAllResto())
      .toEqual([]);
  });

  it('can return all of the Restaurants that have been added', async () => {
    favoriteRestaurants.putResto({ id: 1 });
    favoriteRestaurants.putResto({ id: 2 });

    expect(await favoriteRestaurants.getAllResto())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite Restaurant', async () => {
    favoriteRestaurants.putResto({ id: 1 });
    favoriteRestaurants.putResto({ id: 2 });
    favoriteRestaurants.putResto({ id: 3 });

    await favoriteRestaurants.deleteResto(1);

    expect(await favoriteRestaurants.getAllResto())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a Restaurant even though the Restaurant has not been added', async () => {
    favoriteRestaurants.putResto({ id: 1 });
    favoriteRestaurants.putResto({ id: 2 });
    favoriteRestaurants.putResto({ id: 3 });

    await favoriteRestaurants.deleteResto(4);

    expect(await favoriteRestaurants.getAllResto())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteRestaurantModel };
