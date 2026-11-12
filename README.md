# Marcos Bezner · Portfolio

Static portfolio for Python and C#/.NET backend development, APIs, automation, and document processing.

## Local preview

Requires Python 3. From the repository root:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

Open http://127.0.0.1:8080. There is no build step or package installation.

## Structure

- `index.html`: selected work, experience, research, and contact.
- `assets/site.css`: shared responsive styles for light and dark themes.
- `assets/theme.js`: theme selector that follows the system preference until a visitor chooses a mode.
- `projects/vpn-broker.html`: on-demand VPN provisioning and its production rollout at Mottu.
- `projects/mottu-regulatory.html`: vehicle registration, payments, document reissue, and production monitoring for Mottu Mexico.
- `projects/meu-dinheiro.html`: personal application case study. Its source repository remains private; no private data or application files are bundled.
- `projects/invoice-extraction.html`: high-level account of professional experience at Coamo.
- `projects/trend-lab.html`: trading bot, historical market replay, and backtest methodology.
- `projects/wildfire.html`: existing research analysis with evaluation context.
- `projects/brazilian_ecommerce.html`: ongoing Olist analysis, clearly marked as unfinished.
- `assets/images/covers/`: generated project illustrations with metrics in the site markup.
- `assets/images/companies/`: company marks sourced from the [Mottu website](https://www.mottu.com.br/) and [Coamo Memorial](https://memorial.coamo.com.br/).
- `assets/maps/`: existing geographic visualizations.
- `assets/images/meu-dinheiro/`: four user-provided screenshots of fictional demo data, used in the project card and case study gallery.

## Editing and publication

Edit the HTML and shared CSS directly. Use fictional data for any future demonstrations or screenshots. Do not commit bank statements, SQLite databases, API credentials, or employer source code.

GitHub Pages publishes this site from the `main` branch. Review changes locally before updating that branch. No build step or additional hosting service is required.
