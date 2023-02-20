const MarksCard = () => {

  return (
    <div className="marks-card my-3">
      <div className="marks-card__header d-flex justify-content-between">
        <div className="marks-card__header-title">
          <h5>Student Marks</h5>
        </div>
        <div className="marks-card__header-list">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a className="nav-link active" id="cs-302" data-bs-toggle="tab" href="#CS302" role="tab" aria-controls="CS302" aria-selected="true">
                CS302
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" id="cs-402" data-bs-toggle="tab" href="#CS402" role="tab" aria-controls="CS402" aria-selected="false">
                CS402
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" id="cs-502" data-bs-toggle="tab" href="#CS502" role="tab" aria-controls="CS502" aria-selected="false">
                CS502
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="marks-card__body">
        <div className="tab-content">
          <div className="tab-pane active" id="CS302">
            <div class="accordion" id="accordionExample">
              <h5>CS302 - Information Security</h5>
              <div class="accordion-item">
                <h5 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Assignment
                  </button>
                </h5>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                >
                  <div class="accordion-body">
                    <table>
                      <tr>
                        <th>Assignment No.</th>
                        <th>Weightage</th>
                        <th>Obtained Marks</th>
                        <th>Total Marks</th>
                        <th>Minimum</th>
                        <th>Maximum</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2.5</td>
                        <td>3</td>
                        <td>5</td>
                        <td>0</td>
                        <td>5</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Sessional
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                >
                  <div class="accordion-body">
                    <table>
                      <tr>
                        <th>Assignment No.</th>
                        <th>Weightage</th>
                        <th>Obtained Marks</th>
                        <th>Total Marks</th>
                        <th>Minimum</th>
                        <th>Maximum</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2.5</td>
                        <td>3</td>
                        <td>5</td>
                        <td>0</td>
                        <td>5</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Project
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                >
                  <div class="accordion-body">
                    <table>
                      <tr>
                        <th>Assignment No.</th>
                        <th>Weightage</th>
                        <th>Obtained Marks</th>
                        <th>Total Marks</th>
                        <th>Minimum</th>
                        <th>Maximum</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2.5</td>
                        <td>3</td>
                        <td>5</td>
                        <td>0</td>
                        <td>5</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="CS402">
            <div class="accordion" id="accordionExample">
              <h5>CS402 - Professional Practices in IT</h5>
              <div class="accordion-item">
                <h5 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Assignment
                  </button>
                </h5>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                >
                  <div class="accordion-body">
                    <table>
                      <tr>
                        <th>Assignment No.</th>
                        <th>Weightage</th>
                        <th>Obtained Marks</th>
                        <th>Total Marks</th>
                        <th>Minimum</th>
                        <th>Maximum</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2.5</td>
                        <td>3</td>
                        <td>5</td>
                        <td>0</td>
                        <td>5</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Sessional
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                >
                  <div class="accordion-body">
                    <table>
                      <tr>
                        <th>Assignment No.</th>
                        <th>Weightage</th>
                        <th>Obtained Marks</th>
                        <th>Total Marks</th>
                        <th>Minimum</th>
                        <th>Maximum</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2.5</td>
                        <td>3</td>
                        <td>5</td>
                        <td>0</td>
                        <td>5</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Project
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                >
                  <div class="accordion-body">
                    <table>
                      <tr>
                        <th>Assignment No.</th>
                        <th>Weightage</th>
                        <th>Obtained Marks</th>
                        <th>Total Marks</th>
                        <th>Minimum</th>
                        <th>Maximum</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2.5</td>
                        <td>3</td>
                        <td>5</td>
                        <td>0</td>
                        <td>5</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="CS502">
            <div class="accordion" id="accordionExample">
              <h5>CS502 - Design Defects and Restructuring</h5>
              <div class="accordion-item">
                <h5 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Assignment
                  </button>
                </h5>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                >
                  <div class="accordion-body">
                    <table>
                      <tr>
                        <th>Assignment No.</th>
                        <th>Weightage</th>
                        <th>Obtained Marks</th>
                        <th>Total Marks</th>
                        <th>Minimum</th>
                        <th>Maximum</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2.5</td>
                        <td>3</td>
                        <td>5</td>
                        <td>0</td>
                        <td>5</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Sessional
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                >
                  <div class="accordion-body">
                    <table>
                      <tr>
                        <th>Assignment No.</th>
                        <th>Weightage</th>
                        <th>Obtained Marks</th>
                        <th>Total Marks</th>
                        <th>Minimum</th>
                        <th>Maximum</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2.5</td>
                        <td>3</td>
                        <td>5</td>
                        <td>0</td>
                        <td>5</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Project
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                >
                  <div class="accordion-body">
                    <table>
                      <tr>
                        <th>Assignment No.</th>
                        <th>Weightage</th>
                        <th>Obtained Marks</th>
                        <th>Total Marks</th>
                        <th>Minimum</th>
                        <th>Maximum</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2.5</td>
                        <td>3</td>
                        <td>5</td>
                        <td>0</td>
                        <td>5</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarksCard;
