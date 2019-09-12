describe("CT01_Planet", function () {
	it('Get Planet', function() {
		cy.request({
			method: 'get',
			followRedirect: false, log: true,// turn off following redirects
			url: 'https://swapi.co/api/planets/1/',

			headers: {
				'accept': 'application/json'

			},
			response: []
		})

				.then((response) => {
				  cy.log(response.body)
				assert.equal(response.status,200);
				expect(response.body).to.not.be.null;
				})
	});
});

describe("CT02_Planet", function () {
	it('Get Planet', function req () {
		cy.request('https://swapi.co/api/planets/1/').as('Planet')

		cy.get('@Planet').should((response) => {
			assert.equal(response.status,200)
			expect(response.body).to.not.be.null
			expect(response).to.have.property('headers')
			expect(response).to.have.property('duration')
		})
    })
});