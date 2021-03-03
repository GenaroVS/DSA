/*
  Given a list of directory info including directory path,
  and all the files with contents in this directory,
  you need to find out all the groups of duplicate files in the file system in terms of their paths.
*/
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
  var freq = {};
  var results = [];

  for (var path of paths) {
    var files = path.split(' ');
    var dir = files[0];

    for (var i = 1; i < files.length; i++) {
      var file = files[i];
      var content = '';
      var name = '';
      var isContent = false;

      for (var j = 0; j < file.length; j++) {
        if (file[j] === '(') isContent = true;
        isContent ? content += file[j] : name += file[j];
      }

      if (freq[content]) {
        freq[content].push(dir + '/' + name);
      } else {
        freq[content] = [dir + '/' + name];
      }
    }
  }

  for (var content in freq) {
    if (freq[content].length > 1) {
      results.push(freq[content]);
    }
  }

  return results;
};