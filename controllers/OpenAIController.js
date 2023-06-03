import { Configuration, OpenAIApi } from "openai";

export async function test(req, res) {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const question = !req.query.q ? "" : req.query.q;
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: question }],
  });
  let data = {};
  if (!question) {
    data = {
      hasil: "",
    };
  } else {
    data = {
      hasil: completion.data.choices[0].message.content,
    };
  }
  res.render("chatai/index", data);
}
