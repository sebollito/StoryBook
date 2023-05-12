
//require.config({
//    paths: {
//        'StoryBook': 'StoryBook',
//        'AIT-BPD-Common-core': 'AIT-BPD-Common-core'
//    }
//});

define(function(require,exports,module) {
    require(["StoryBook"],function(sb) {
        return sb;
    });
    require(["x-tag"],function(xt) {
        return xt;
    });
    require(["AIT-BPD-Common-core"],function(cc) {
        return cc;
    });
});