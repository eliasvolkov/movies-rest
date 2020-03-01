import { action, decorate, observable, runInAction } from 'mobx';
import { getPopularMovies } from 'services/Movies';

class MoviesStore {
    public newMovies = [];
    public state = 'pending';

    public fetchNewMovies = async () => {
        const movies = await getPopularMovies();
        runInAction(() => {
            this.state = 'done';
            this.newMovies = movies.results;
        });
    };
}

decorate(MoviesStore, {
    newMovies: observable,
    state: observable,
    fetchNewMovies: action,
});

// tslint:disable-next-line: no-default-export
export default new MoviesStore();
