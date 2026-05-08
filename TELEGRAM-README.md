# Claude Telegram Wrapper for @woby/three

This wrapper script starts Claude with Telegram integration specifically configured for this project folder.

## What It Does

1. **Starts GLM proxy** (API gateway) on an available port
2. **Sets Telegram config** to project-local directory (`.claude/channels/telegram/`)
3. **Launches Claude** with Telegram channel enabled
4. **Cleans up** proxy when Claude exits

## Usage

### Start Claude with Telegram

```bash
.\claude-telegram.bat
```

### Stop everything

```bash
.\claude-telegram.bat stop
```

## Configuration

**Telegram config location**: `.claude/channels/telegram/`

- `.env` - Bot token
- `access.json` - Access control (allowed users, policy)

## Setup

### 1. Configure bot token

Create `.claude/channels/telegram/.env`:

```
TELEGRAM_BOT_TOKEN=your_bot_token_here
```

### 2. Create access config

Create `.claude/channels/telegram/access.json`:

```json
{
  "dmPolicy": "pairing",
  "allowFrom": [],
  "groups": {},
  "pending": {},
  "mentionPatterns": ["@yourbotusername"]
}
```

### 3. Run the wrapper

```bash
.\claude-telegram.bat
```

### 4. Pair your Telegram account

1. DM your bot on Telegram
2. Get pairing code
3. Run `/telegram:access pair <code>` in Claude session

### 5. Lock it down

```bash
/telegram:access policy allowlist
```

## How It Works

The wrapper sets the `TELEGRAM_STATE_DIR` environment variable to point to the project-local config directory before starting Claude. This overrides the default global config location (`~/.claude/channels/telegram/`).

## Benefits

- ✅ **Project-specific bot** - Different bot for this project
- ✅ **Isolated config** - Doesn't interfere with other projects
- ✅ **Easy setup** - Just run the batch file
- ✅ **Automatic cleanup** - Proxy stops when Claude exits

## Troubleshooting

**Bot not responding?**
- Check token in `.claude/channels/telegram/.env`
- Verify you're approved in `access.json`
- Ensure you started with `.\claude-telegram.bat` (not just `claude`)

**Port conflicts?**
- The script automatically finds an available port (8787-8806)
- Close other instances if needed

**Config not loading?**
- Check `TELEGRAM_STATE_DIR` is set correctly
- Verify files exist in `.claude/channels/telegram/`

## Files

- `claude-telegram.bat` - Wrapper script
- `.claude/channels/telegram/.env` - Bot token
- `.claude/channels/telegram/access.json` - Access control
- `TELEGRAM-README.md` - This file
