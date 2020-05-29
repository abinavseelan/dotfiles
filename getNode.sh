echo "📣 Installing nvm"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
echo "✅ nvm installed!"

echo "📣 Installing latest node version"
nvm install node # "node" is an alias for the latest version
echo "✅ Done."