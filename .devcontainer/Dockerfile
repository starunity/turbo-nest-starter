FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends iputils-ping

RUN chsh -s /bin/zsh node

RUN su node -c 'source /usr/local/share/nvm/nvm.sh && \
    nvm install --lts'

RUN su node -c 'wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.zshrc" SHELL="$(which zsh)" zsh -'

RUN su node -c zsh -c 'source "$HOME/.zshrc" && \
    pnpm install -g @nestjs/cli'
