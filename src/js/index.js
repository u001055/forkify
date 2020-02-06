import Search from './models/Search';


const state = {};

const controlSearch = async () => {
    const query = 'pizza';

    if (query) {
        state.search = new Search(query);

        await state.search.getResults();

        console.log(state.search.result);
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})