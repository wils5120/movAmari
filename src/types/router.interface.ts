type RootPagesParam = {
    Sesion: undefined,
    TabsHome: undefined,
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
 /*    fav: undefined,
    image: undefined,
    detail: undefined,
    recents: undefined,
    detailRecent: undefined */
}

export default RootPagesParam