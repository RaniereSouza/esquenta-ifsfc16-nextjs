FROM mcr.microsoft.com/devcontainers/javascript-node:20-bullseye

ENV USER=root

RUN apt-get update

# installing bat, 'cause it's fun :D
RUN apt-get install wget -y
RUN wget -P /tmp https://github.com/sharkdp/bat/releases/download/v0.12.1/bat_0.12.1_amd64.deb
RUN dpkg -i /tmp/bat_0.12.1_amd64.deb

# installing The Silver Searcher 'cause it's awesome
RUN apt-get install silversearcher-ag
