import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

        <div className="input-group">
          <div class="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input name="latitude" id="latitude" required/>
          </div>

          <div class="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input name="longitude" id="longitude" required/>
          </div>


        </div> 
          <button type="submit">Salvar</button>
        </form>


      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/54322468?s=460&v=4" alt="Carlos Henrique" />
              <div className="user-info">
                <strong>Carlos Henrique</strong>
                <span>Node.js, React, React Native</span>
              </div>
            </header>
            <p>Bio</p>
            <a href="https://github.com/chhollerveger">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/54322468?s=460&v=4" alt="Carlos Henrique" />
              <div className="user-info">
                <strong>Carlos Henrique</strong>
                <span>Node.js, React, React Native</span>
              </div>
            </header>
            <p>Bio</p>
            <a href="https://github.com/chhollerveger">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/54322468?s=460&v=4" alt="Carlos Henrique" />
              <div className="user-info">
                <strong>Carlos Henrique</strong>
                <span>Node.js, React, React Native</span>
              </div>
            </header>
            <p>Bio</p>
            <a href="https://github.com/chhollerveger">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/54322468?s=460&v=4" alt="Carlos Henrique" />
              <div className="user-info">
                <strong>Carlos Henrique</strong>
                <span>Node.js, React, React Native</span>
              </div>
            </header>
            <p>Bio</p>
            <a href="https://github.com/chhollerveger">Acessar perfil no GitHub</a>
          </li>
        </ul>


      </main>


    </div>
  );
}

export default App;
