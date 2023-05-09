require.config({
    baseUrl: '/',
    paths: {
        StoryBook: 'StoryBook'
    }
});


define(['StoryBook'], function(sb) {
    console.log(sb,'<----');
});