export default function({types: t }) {
  return {
    visitor: {
      Identifier(path) {
        path.scope.rename('foo', 'bar');
      }
    }
  };
}
