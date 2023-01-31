# Rollup CommonJs plug isCyclic bug repro

The CommonJS plugin in rollup has a bug where it sometimes fails to detect a
circular dependency. The issue that [this call to isCyclic](https://github.com/rollup/plugins/blob/69146cdf1f7353aa72364f69fa5e49c732a1abd8/packages/commonjs/src/resolve-require-sources.js#L72)
happens before the dependency graph is fully built and so
`loadModule(resolved)` might be skipped while it shouldn't be.
And then `getTypeForFullyAnalyzedModule`
[here](https://github.com/rollup/plugins/blob/69146cdf1f7353aa72364f69fa5e49c732a1abd8/packages/commonjs/src/resolve-require-sources.js#L188)
is called before the module is indeed fully analyzed. Then the module doesn't
get "require wrapper" while it does need one.

The dependency graph between the modules in the repo is like this:
```
5 <-- 4 <-- 11 <-- 10
|     ^             ^
V     |             |
6     1 <-- main    9
|     |             ^
V     V             |
7 --> 2 <=> 3 ----> 8
```

If the dependency from `module3.js` to `module2.js` is removed, then everything
works fine. But as it is, loading index.html fails with `TypeError: m4.inc is
not a function`.

But you don't need to load index.html to observe the issue. Inspect
`output/main.js` and notice that several modules are not inside a "require
wrapper" while all but `main.js` and `module1.js` have a circular dependency on
each other.
