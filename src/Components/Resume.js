import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>SWE</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div class="wrap-collapsible">
              <input id="collapsible1" class="toggle" type="checkbox" />
              <label for="collapsible1" class="lbl-toggle">
                Pathfinding Visualizer
              </label>
              <div class="collapsible-content">
                <div class="content-inner">
                  <p>
                    A web application that colorfully visualizes pathfinding
                    algorithms such as Dijkstra's and A* search where the
                    algorithm navigates around user-drawn "walls" on a grid to
                    find the shortest path between a start and end node. Built
                    with React, Javascript, and HTML/CSS.
                  </p>
                  <img
                    src="images/a-star-demo.gif"
                    alt="Pathfinding Visualizer demo gif"
                  />
                  <a
                    href="https://vincent-ngo31.github.io/pathfinding-visualizer/"
                    target="_blank"
                  >
                    Try it out here!
                  </a>
                </div>
              </div>

              <input id="collapsible2" class="toggle" type="checkbox" />
              <label for="collapsible2" class="lbl-toggle">
                Bear Maps
              </label>
              <div class="collapsible-content">
                <div class="content-inner">
                  <p>
                    A backend web server for Bear Maps, a Google Maps clone that
                    utilizes real-world mapping data to display a geographical
                    map of Berkeley, CA with A* search route-finding, scrolling,
                    and zooming functionality. Built with Java.
                    <br></br>
                    <br></br>
                    <img
                      src="images/bearmaps-demo.gif"
                      alt="Bear Maps demo gif"
                    />
                    <a
                      href="http://bearmaps3.herokuapp.com/map.html"
                      target="_blank"
                    >
                      Try it out here!
                    </a>
                  </p>
                </div>
              </div>

              <input id="collapsible3" class="toggle" type="checkbox" />
              <label for="collapsible3" class="lbl-toggle">
                Pacman AI
              </label>
              <div class="collapsible-content">
                <div class="content-inner">
                  <p>
                    Fully autonomous Pacman agent developed in Berkeley's course
                    on Artificial Intelligence.
                    <br></br>
                    <br></br>
                    Stage 1: Search. Implemented DFS, BFS, UCS, and A* search in
                    order Pacman to navigate to his target dot in the most
                    efficient path possible.
                    <img
                      src="images/astar-search-pacman.gif"
                      alt="A* search with Manhattan distance heuristic"
                    />
                    <br></br>
                    <br></br>
                    Stage 2: Multiagent Adversarial Search. In order to behave
                    optimally when ghosts are introduced, we can model classic
                    Pacman as both an adversarial and a stochastic search
                    problem. Implemented minimax with alpha-beta pruning and
                    expectimax algorithms and designed optimal evaluation
                    functions.
                    <br></br>
                    <img
                      src="images/expectimax-multiagent-pacman.gif"
                      alt="Expectimax strategy with custom evaluation function"
                    />
                    <br></br>
                    <br></br>
                    Stage 3: Reinforcement Learning. Implemented model-based
                    (variations of value iteration) and model-free (variations
                    of Q-learning) reinforcement learning algorithms. The below
                    agent uses approximate Q-learning and a simple feature
                    extractor which learns to win very quickly. It only needs 50
                    training games to win almost 100% of the time.
                    <img
                      src="images/q-learning-pacman.gif"
                      alt="Q-Learning Agent"
                    />
                    <br></br>
                    <br></br>
                    Final product using an approximate Q-learning agent with a
                    modified feature extractor that incentivizes eating scared
                    ghosts:
                    <img
                      src="images/final-qlearning-pacman.gif"
                      alt="Final Q-Learning Agent (2x speed)"
                    />
                    <br></br>
                    <br></br>
                    Source code is not public due to course guidelines, but
                    additional information is available&nbsp;
                    <a
                      href="http://ai.berkeley.edu/project_overview.html"
                      target="_blank"
                    >
                      here.
                    </a>
                  </p>
                </div>
              </div>

              <input id="collapsible4" class="toggle" type="checkbox" />
              <label for="collapsible4" class="lbl-toggle">
                Instagram Music Bot
              </label>
              <div class="collapsible-content">
                <div class="content-inner">
                  <p>
                    A script that rapidly views the Instagram Stories of users
                    you follow, detects if Spotify media is shared, and
                    generates a custom Spotify playlist with any shared tracks
                    it finds. Built with Python, Selenium, Spotify Web API, and
                    Requests API.
                    <br></br>
                    <br></br>
                    <img
                      src="images/ig_bot_playlist.png"
                      alt="Custom bot-generated playlist"
                    />
                    <a
                      href="https://github.com/vincent-ngo31/instagram-music-bot"
                      target="_blank"
                    >
                      Github project link
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Data Science</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div class="wrap-collapsible">
              <input id="collapsible5" class="toggle" type="checkbox" />
              <label for="collapsible5" class="lbl-toggle">
                Bio-Rad Customer Churn Model
              </label>
              <div class="collapsible-content">
                <div class="content-inner">
                  <p>
                    I spent a summer at Bio-Rad Laboratories in Hercules, CA
                    investigating customer behavior as well as how we could
                    leverage data science to predict future behavior. Using 86
                    million rows of global transaction data, I implemented a
                    custom classification model based on XGBoost to predict
                    customer churn for upcoming purchase cycles using key
                    business features. These efforts went toward more targeted
                    client retention efforts.
                  </p>
                </div>
              </div>

              <input id="collapsible6" class="toggle" type="checkbox" />
              <label for="collapsible6" class="lbl-toggle">
                STSI Blood Pressure Clustering Analysis
              </label>
              <div class="collapsible-content">
                <div class="content-inner">
                  <p>
                    I spent some time at the Scripps Translational Science
                    Institute in La Jolla, CA researching the efficacy of using
                    various 3D clustering methods such as DBSCAN and Meanshift
                    to identify misused blood pressure devices.
                    <br></br>
                    <br></br>
                    <a
                      href="https://docs.google.com/presentation/d/1tCjBPJMYqAy2F37nUbacttyvFYhMeXRfWlMs4jdMQng/edit?usp=sharing"
                      target="_blank"
                    >
                      Presentation slide deck
                    </a>
                  </p>
                </div>
              </div>

              <input id="collapsible7" class="toggle" type="checkbox" />
              <label for="collapsible7" class="lbl-toggle">
                NLP Sentiment Analysis of Trump's Tweets
              </label>
              <div class="collapsible-content">
                <div class="content-inner">
                  <p>
                    A source analysis of Donald Trump's tweets during his
                    presidency using NLP. Used JSON parsing methods and data
                    formatting to store tweets with custom engineered features
                    in Pandas dataframes. Built data visualizations on
                    relationships between tweet sentiment (negativity, polarity,
                    etc.), follower engagement, and activity. Built using
                    Python, tweepy, scikit-learn, Pandas, and matplotlib.
                    <br></br>
                    <br></br>
                    <a
                      href="https://github.com/vincent-ngo31/twitter-sentiment-analysis"
                      target="_blank"
                    >
                      Github project link
                    </a>
                  </p>
                </div>
              </div>

              <input id="collapsible8" class="toggle" type="checkbox" />
              <label for="collapsible8" class="lbl-toggle">
                NYC Taxi Rides Analysis
              </label>
              <div class="collapsible-content">
                <div class="content-inner">
                  <p>
                    Part 1: Mined NYC taxi ride data by querying database using
                    SQLite. Conducted exploratory data analysis, inspection, and
                    cleaning using SQL. Created training and validation datasets
                    for future use.
                    <br></br>
                    Part 2: Continued exploration on training dataset.
                    Visualized and analyzed time, distance, and
                    spatial/locational features. Implemented clustering analysis
                    to pinpoint more nuanced features.
                    <br></br>
                    Part 3: Conducted EDA on NYC taxi accident data. Focused on
                    features similar to those in Part 2.
                    <br></br>
                    Part 4: Completed feature engineering and constructed
                    regression model for the purpose of predicting the duration
                    of an NYC taxi ride based on given information. Fit the
                    model on training data, validated, and tested. Built
                    reusable data processing pipeline. Model achieved a mean
                    absolute error (MAE) of 176, meaning it was off by roughly
                    2-4 minutes for an average taxi ride.
                    <br></br>
                    <br></br>
                    <a
                      href="https://github.com/vincent-ngo31/nyc-taxi-rides"
                      target="_blank"
                    >
                      Github project link
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Neuroscience</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div class="wrap-collapsible">
              <input id="collapsible9" class="toggle" type="checkbox" />
              <label for="collapsible9" class="lbl-toggle">
                Individual differences in TMS sensitivity influence the efficacy
                of tDCS in facilitating sensorimotor adaptation
              </label>
              <div class="collapsible-content">
                <div class="content-inner">
                  <p>
                    As a research assistant in Professor Richard Ivry's
                    Cognition and Action Lab, I was extensively trained in
                    noninvasive brain stimulation paradigms such as TMS
                    (transcranial magnetic stimulation) and tDCS (transcranial
                    direct current stimulation). I then helped collect and
                    analyze MEPs (motor-evoked potentials) elicited from TMS and
                    tDCS data using MATLAB and Microsoft Excel.
                    <br></br>
                    <br></br>
                    <a
                      href="http://ivrylab.berkeley.edu/uploads/4/1/1/5/41152143/labruna_bs_2019.pdf"
                      target="_blank"
                    >
                      Individual differences in TMS sensitivity influence the
                      efficacy of tDCS in facilitating sensorimotor adaptation
                    </a>
                    <br></br>
                    <br></br>
                    "Background: Transcranial direct current stimulation (tDCS)
                    can enhance cognitive function in healthy individuals, with
                    promising applications as a therapeutic intervention.
                    Despite this potential, variability in the efficacy of tDCS
                    has been a considerable concern. Objective: /Hypothesis:
                    Given that tDCS is always applied at a set intensity, we
                    examined whether individual differences in sensitivity to
                    brain stimulation might be one variable that modulates the
                    efficacy of tDCS in a motor learning task.
                    <br></br>
                    <br></br>
                    Methods: In the first part of the experiment, single-pulse
                    transcranial magnetic stimulation (TMS) over primary motor
                    cortex (M1) was used to determine each participant's resting
                    motor threshold (rMT). This measure was used as a proxy of
                    individual sensitivity to brain stimulation. In an
                    experimental group of 28 participants, 2 mA tDCS was then
                    applied during a motor learning task with the anodal
                    electrode positioned over left M1. Another 14 participants
                    received sham stimulation.
                    <br></br>
                    <br></br>
                    Results: M1-Anodal tDCS facilitated learning relative to
                    participants who received sham stimulation. Of primary
                    interest was a within-group analysis of the experimental
                    group, showing that the rate of learning was positively
                    correlated with rMT: Participants who were more sensitive to
                    brain stimulation as operationalized by our TMS proxy (low
                    rMT), showed faster adaptation.
                    <br></br>
                    <br></br>
                    Conclusions: Methodologically, the results indicate that TMS
                    sensitivity can predict tDCS efficacy in a behavioral task,
                    providing insight into one source of variability that may
                    contribute to replication problems with tDCS. Theoretically,
                    the results provide further evidence of a role of
                    sensorimotor cortex in adaptation, with the boost from tDCS
                    observed during acquisition."
                  </p>
                </div>
              </div>

              <input id="collapsible10" class="toggle" type="checkbox" />
              <label for="collapsible10" class="lbl-toggle">
                Proactive control shapes subsequent response inhibition through
                motor preparation
              </label>
              <div class="collapsible-content">
                <div class="content-inner">
                  <p>
                    I assisted Liisa Raud, a visiting scholar from the
                    University of Oslo, with data collection using TMS
                    (transcranial magnetic stimulation), EEG
                    (electroencephalography), and EMG (electromyography) for her
                    study on selective motor inhibition (paper in preparation).
                    <br></br>
                    <br></br>
                    From Liisa's PhD dissertation
                    <br></br>
                    <a
                      href="https://www.duo.uio.no/handle/10852/72266"
                      target="_blank"
                    >
                      Partitioning response inhibition by its latency, extent,
                      and electrophysiological correlates
                    </a>
                    :<br></br>
                    <br></br>
                    "Study III: Proactive control shapes subsequent response
                    inhibition through motor preparation.
                    <br></br>
                    <br></br>
                    Background: In our everyday behavior, we often cancel one
                    movement while continuing others. The brain mechanisms
                    underlying this selective inhibition of action are elusive.
                    Two models have been suggested: an abrupt global pause
                    followed by the restart of other previously initiated
                    actions, and two distinct and independent global and
                    selective inhibitory mechanisms operating in parallel. We
                    assessed associations between behavioral and physiological
                    markers of proactive control, motor preparation, and
                    response inhibition to evaluate these models.
                    <br></br>
                    <br></br>
                    Methods: Healthy volunteers (n = 15) performed two versions
                    of the stop signal task: a unimanual version where a single
                    action (a left or right hand response) had to be executed or
                    inhibited, and a bimanual version where a multi-component
                    action had to be executed (left and right hand response) and
                    only one hand’s response had to be inhibited in case of the
                    stop signal. Proactive control was manipulated by
                    direction-specific cues at the beginning of a trial. Motor
                    preparation and inhibition indices were concurrently
                    extracted from behavioral performance, electromyography
                    (EMG), electroencephalography (EEG), and motor evoked
                    potentials (MEP) elicited by transcranial magnetic
                    stimulation.
                    <br></br>
                    <br></br>
                    Results: Global inhibition account was supported by
                    prevalent interference in the responding hand reaction times
                    and EMG time-courses. No conclusive evidence was found in
                    support of the dual-mechanisms account, as stopping
                    latencies, MEPs, and frontal beta power were similar in the
                    uni- and bimanual tasks. Proactive control was evident in
                    the modulation of preparatory mu oscillations that further
                    affected subsequent stopping success.
                    <br></br>
                    <br></br>
                    Conclusions: The results favored the account of a single
                    inhibition mechanism instead of independent selective and
                    global mechanisms. Further, inhibition efficiency was
                    affected by the sensory-motor activity before the stop
                    signal, reflected by the power changes in the mu band. This
                    motor activity was affected by proactive control already at
                    the preparatory cuedelay period. Altogether, the results
                    suggest that the net behavioral output in response
                    inhibition task is affected by the levels of action-specific
                    motor preparation."
                  </p>
                </div>
              </div>

              <input id="collapsible11" class="toggle" type="checkbox" />
              <label for="collapsible11" class="lbl-toggle">
                Anatomical Constraints on Reactive Inhibition
              </label>
              <div class="collapsible-content">
                <div class="content-inner">
                  <p>
                    Began work on a novel study investigating how anatomical
                    proximity affects reactive inhibition mechanisms during
                    non-selective stopping tasks. We hypothesized that reactive
                    inhibition is similar to preparatory inhibition in that the
                    magnitude of inhibition in task-irrelevant muscles is much
                    larger for intra-segment musles compared to inter-segment
                    muscles. I primarily developed the study design and
                    methodology before I left the lab in 2018.
                    <br></br>
                    <br></br>
                    <a
                      href="https://docs.google.com/presentation/d/1JsMMvveFk2nvykee_yft6C8sENkMIlR-jFH01mmu1z4/edit?usp=sharing"
                      target="_blank"
                    >
                      Intro presentation to faculty
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
