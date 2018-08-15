default:
	npx tree-sitter generate
	npx node-gyp build
	npx tree-sitter test
