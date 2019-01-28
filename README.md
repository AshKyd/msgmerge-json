# msgmerge-json

A tool to merge JSON translation files.

Specify a source and a dest file, then msgmerge-json ensures the dest matches the same structure. String values are emptied, to allow tools like Weblate to show a completeness percent.

## Usage

```
Usage: index [options] <srcFile> <destFiles ...>

Options:
  -V, --version  output the version number
  -h, --help     output usage information
```
