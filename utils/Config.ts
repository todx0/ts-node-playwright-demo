export class Config {
  private static requiredVars = ['PASSWORD', 'URL'];

  static PASSWORD: string;
  static URL: string;

  static validate() {
    const missingVars = this.requiredVars.filter(varName => !process.env[varName]);
    if (missingVars.length > 0) throw Error(`Missing environment variables: ${missingVars.join(', ')}`);

    this.PASSWORD = process.env.PASSWORD!;
    this.URL = process.env.URL!;
  }
}
