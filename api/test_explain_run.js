import handler from './explain.js';

// Mock process.env key to avoid accidental network use
process.env.ANTHROPIC_API_KEY = 'test-key';

// Prepare a sequence of fake AI responses to test parser branches
const fakeResponses = [
  // OpenAI-like
  { choices: [{ message: { content: 'OpenAI-style explanation text.' } }] },
  // choices.text
  { choices: [{ text: 'Legacy choices.text explanation.' }] },
  // completion
  { completion: 'Completion-style explanation.' },
  // output array
  { output: [{ content: [{ type: 'output_text', text: 'Output-array explanation.' }] }] },
  // message.content
  { message: { content: 'Message.content explanation.' } },
  // content[0].text
  { content: [{ text: 'Content-array explanation.' }] },
];

// Mock global fetch to return each fake response in sequence
let call = 0;
global.fetch = async () => {
  const body = fakeResponses[call % fakeResponses.length];
  call += 1;
  return {
    ok: true,
    json: async () => body,
  };
};

// Minimal mock req/res
const makeReq = () => ({
  method: 'POST',
  body: {
    mode: 'career',
    traits: { curiosity: 80, logic: 70 },
    matches: [{ name: 'Engineer', match: 92 }],
  },
});

function makeRes() {
  return {
    statusCode: 200,
    status(code) { this.statusCode = code; return this; },
    json(obj) { console.log('RES JSON:', JSON.stringify(obj, null, 2)); return this; },
    end() { console.log('END'); },
  };
}

(async () => {
  for (let i = 0; i < fakeResponses.length; i++) {
    console.log('\n--- Run', i + 1, '---');
    const req = makeReq();
    const res = makeRes();
    await handler(req, res);
  }
})();
