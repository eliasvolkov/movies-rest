import { action, decorate, observable, runInAction } from 'mobx';
import { getHeroMovies, getPopularMovies } from 'services/Movies';
import { IMovieDetail } from 'types/MovieDetails';

interface IHero {
    heroMovies: IMovieDetail[];
    activeHero: IMovieDetail;
}
class MoviesStore {
    public newMovies = [];
    public hero: IHero = {
        heroMovies: [],
        activeHero: {} as IMovieDetail,
    };

    public heroMovies: IMovieDetail[] = [];
    public state = 'pending';

    public index = 0;

    public fetchNewMovies = async () => {
        const movies = await getPopularMovies();
        runInAction(() => {
            this.state = 'done';
            this.newMovies = movies.results;
        });
    };

    public fetchHeroMovies = async () => {
        const movies = await getHeroMovies();
        runInAction(() => {
            this.state = 'done';
            this.heroMovies = movies;
            this.hero.heroMovies = movies;
            // this.autoSetActiveHero(movies);
        });
    };
    public autoSetActiveHero = (movies: IMovieDetail[]) => {
        this.hero.activeHero = movies[this.index];
        // this.hero.activeHero = movies[1];
        this.index++;

        if (this.index > 2) {
            this.index = 0;
        }

        setTimeout(() => {
            runInAction(() => {
                this.autoSetActiveHero(movies);
            });
        }, 4000);
    };
}

decorate(MoviesStore, {
    newMovies: observable,
    heroMovies: observable,
    hero: observable,
    state: observable,
    fetchNewMovies: action,
    fetchHeroMovies: action,
    autoSetActiveHero: action,
});

// tslint:disable-next-line: no-default-export
export default new MoviesStore();
