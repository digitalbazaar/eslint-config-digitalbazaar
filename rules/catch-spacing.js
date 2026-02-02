export default {
  meta: {
    type: 'layout',
    fixable: 'whitespace',
    schema: [],
    messages: {
      unexpectedSpace: 'Unexpected space between `catch` and `(`.',
      missingSpace: 'Expected space between `catch` and `{`.'
    }
  },

  create(context) {
    const sourceCode = context.getSourceCode();

    return {
      CatchClause(node) {
        const catchToken = sourceCode.getFirstToken(node);
        const nextToken = sourceCode.getTokenAfter(catchToken);

        if(!catchToken || !nextToken) {
          return;
        }

        // case: catch(e)
        if(node.param && nextToken.value === '(') {
          if(sourceCode.isSpaceBetweenTokens(catchToken, nextToken)) {
            context.report({
              node,
              messageId: 'unexpectedSpace',
              fix(fixer) {
                return fixer.removeRange([
                  catchToken.range[1],
                  nextToken.range[0]
                ]);
              }
            });
          }
          return;
        }

        // case: catch {}
        if(!node.param && nextToken.value === '{') {
          if(!sourceCode.isSpaceBetweenTokens(catchToken, nextToken)) {
            context.report({
              node,
              messageId: 'missingSpace',
              fix(fixer) {
                return fixer.insertTextAfter(catchToken, ' ');
              }
            });
          }
        }
      }
    };
  }
};
